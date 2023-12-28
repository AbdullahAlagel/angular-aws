import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router:Router) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   request = request.clone({
  //     setHeaders: { 'Accept-Language':'ar'},
  //     });
  //   return next.handle(request)
  //     .pipe(
  //       map(res => res),
  //       catchError((error: HttpErrorResponse) => {
  //         if (error.status == 403)
  //         {
  //           // this.authenticationService.logout();
  //           // location.reload();
  //         }
  //         if (error.status === 401 && !error.error.message.match("token_Expire")) {
  //           this.router.navigate(['/error']);
  //           return;
  //         }

        
          
  //         let errorMsg = '';
  //         if (error.error instanceof ErrorEvent) {
  //           // This is client side error
  //           errorMsg = error.error.message;
  //         } else {
  //           // This is back side error
  //         }
  //         console.log('check ErrorInterceptor');
  //         console.log(error);
  //         return throwError(error.error.message);
  //       })
  //     )
  // }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { 'Accept-Language':'ar'},
      });
    return next.handle(request)
        .pipe( map(res => res),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                     console.log(errorMsg);
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    console.log('This is server side error',error.error.message);
                    errorMsg = `${error.error.message}`;
                }
                console.log(errorMsg);
                return throwError(errorMsg);
            })
        )
}
}