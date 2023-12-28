import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { exhaustMap, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return this.authenticationService.user.pipe(
            take(1), exhaustMap(user => {
              if (!user) { return next.handle(request); }
              console.log("Token",this.authenticationService.userInfo.token)
              request = request.clone({
             
                setHeaders: {
                  'Accept-Language': 'ar',
                  Authorization: `Bearer ${this.authenticationService.userInfo.token}`,
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': 'true',
                  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE',
                  'Access-Control-Allow-Headers': 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control'
                },
              });
              return next.handle(request);
            })
          )
    }
}