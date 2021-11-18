import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService, IUser } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardSolution02 implements CanActivate {
  constructor(private _authService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.user$.pipe(map((user: IUser) => user.isLoggedIn));
  }
}
