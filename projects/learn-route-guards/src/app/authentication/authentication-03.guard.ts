import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthenticationService, IUser } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardSolution03 implements CanActivate {
  constructor(private _authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.user$.pipe(
      map((user: IUser) => user.isLoggedIn),
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['homepage']);
        }
      })
    );
  }
}
