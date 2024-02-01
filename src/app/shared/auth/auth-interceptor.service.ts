import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  auth = inject(AuthenticationService);
  token: any = null;
  userToken=JSON.parse(localStorage.getItem("token")!)
  
  constructor() {
    this.auth.token.subscribe((token) => {
      this.token = token;
    });
    this.token=this.userToken
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.isAuthenticated.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', this.token.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
