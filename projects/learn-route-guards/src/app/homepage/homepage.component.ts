import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService, IUser } from '../authentication/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public user$: Observable<IUser> = of();

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
