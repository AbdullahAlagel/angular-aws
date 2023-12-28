import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean|UrlTree| Promise<boolean|UrlTree>|Observable<boolean|UrlTree> {

       return this.authenticationService.user.pipe(take(1), map(user => {
            const isAuthenticated = !!user;
         if (isAuthenticated) { return true; }
            return this.router.createUrlTree(['/login']);
       }));

    }
}
