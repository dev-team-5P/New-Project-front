import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    token = localStorage.getItem('token');

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // tslint:disable-next-line: triple-equals
      if (this.token != null && this.token != undefined) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        return next.handle(req);
      } else { return next.handle(req); }
    }
  }
