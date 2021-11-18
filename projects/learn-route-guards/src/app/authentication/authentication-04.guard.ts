import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService, IUser } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardSolution04 implements CanActivate {
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
      map((user: IUser) => {
        if (!user.isLoggedIn) {
          return this.router.createUrlTree(['homepage']);
        }
        return true;
      })
    );
  }
}
