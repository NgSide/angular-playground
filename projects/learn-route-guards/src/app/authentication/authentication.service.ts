import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUser {
  name: string;
  isLoggedIn: boolean;
  role: string;
}

@Injectable()
export class AuthenticationService {
  user$: Observable<IUser> = of({
    name: 'Rick Grimes',
    isLoggedIn: true,
    role: 'Sheriff',
  });

  constructor() {}
}
