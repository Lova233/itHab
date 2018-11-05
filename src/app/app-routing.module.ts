
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SignupComponent} from '../app/components/signup/signup.component'
import {SigninComponent} from '../app/components/signin/signin.component'
import {DashboardComponent} from '../app/containers/dashboard/dashboard.component'


const routes: Routes = [
  { path: 'signup', component: SignupComponent, },
  { path: 'signin', component: SigninComponent, },
  { path: 'dashboard', component: DashboardComponent, }


  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}