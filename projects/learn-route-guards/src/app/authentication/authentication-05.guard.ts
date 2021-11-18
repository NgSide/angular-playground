import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthenticationService, IUser } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardSolution05 implements CanActivate {
  constructor(private _authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authService.user$.pipe(
      take(1),
      map((user: IUser) => {
        if (!user.isLoggedIn) {
          return this.router.createUrlTree(['homepage']);
        }
        return true;
      })
    );
  }
}
