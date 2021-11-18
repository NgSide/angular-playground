import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardSolution01 } from './authentication/authentication-01.guard';
import { AuthGuardSolution02 } from './authentication/authentication-02.guard';
import { AuthGuardSolution03 } from './authentication/authentication-03.guard';
import { AuthGuardSolution04 } from './authentication/authentication-04.guard';
import { AuthGuardSolution05 } from './authentication/authentication-05.guard';
import { AuthGuardSolution06 } from './authentication/authentication-06.guard';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'admin',
    data: {
      role: 'moderator',
    },
    canActivate: [AuthGuardSolution02],
    component: AdminDashboardComponent,
  },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
