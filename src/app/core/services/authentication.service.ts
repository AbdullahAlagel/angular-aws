import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { LoginInfoOutput } from '../types/LoginInfoOutput';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/modules/user/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user = new BehaviorSubject<User>(null!);
  constructor(private http: HttpClient, private router: Router) { }

  get userInfo() {
    return this.user.getValue();
  }

  login(username: string, password: string) {
    return this.http
      .post<LoginInfoOutput>(environment.apiBaseUrl + `api/v1/sessions`, {
        username,
        password,
      })
      .pipe(
        tap((resData) => {
          this.handleAuthentication(
            resData.id,
            resData.username,
            resData.name,
            resData.token,
            resData.expirtionTime,
            resData.lastLogin
          );
        })
      );
  }

  private handleAuthentication(
    id: number,
    username: string,
    name: string,
    token: string,
    expirtionTime: string,
    lastLogin: string
  ) {
    const expirationDate = new Date(expirtionTime);
    const user = new User(
      id,
      username,
      name,
      token,
      expirationDate,
      new Date(lastLogin)
    );
    this.user.next(user);
    sessionStorage.setItem('userInfo', JSON.stringify(user));
  }

  autoLogin() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')!);
    if (!userInfo) return;
    const loadedUser = new User(
      userInfo.id,
      userInfo.username,
      userInfo.name,
      userInfo.token,
      new Date(userInfo.tokenExpirtionTime),
      new Date(userInfo.lastLogin)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  
  logout() {
    // this.http.get(environment.apiBaseUrl + 'api/v1/logout-session').
    //   subscribe(data => { }, error => alert('error when logout'));
    alert('error when logout')
    this.user.next(null!);
    this.router.navigate(['/login']);
    sessionStorage.removeItem('userInfo');

  }
}
