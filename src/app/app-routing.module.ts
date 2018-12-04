
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SignupComponent} from '../app/components/signup/signup.component'
import {SigninComponent} from '../app/components/signin/signin.component'
// import { DashboardComponent } from '../app/containers/dashboard/dashboard.component'
import { FutureComponent } from './containers/future/future.component';
import { PastComponent } from './containers/past/past.component';
import { PresentComponent } from './containers/present/present.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent, },
  { path: 'signin', component: SigninComponent, },
  { path: 'future', component: FutureComponent, },
  { path: 'past', component: PastComponent, },
  { path: 'present', component: PresentComponent, }


  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}