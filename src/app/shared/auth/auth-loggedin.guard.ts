import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable({ providedIn: 'root' })

export class CheckedLoggedInGuard implements CanActivate {
  auth = inject(AuthenticationService);
  router = inject(Router);

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree => {
    return this.auth.isAuthenticated.pipe(
      take(1),
      map((isAuthenticated) => {

        const isLoggedIn = !!isAuthenticated;
        
        if (isLoggedIn) {
          return this.router.createUrlTree(['/home']);
        }
        
        return true;
      })
    );
  };
}
