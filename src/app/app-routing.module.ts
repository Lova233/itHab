
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FutureComponent } from './containers/future/future.component';
import { PastComponent } from './containers/past/past.component';
import { PresentComponent } from './containers/present/present.component';


const routes: Routes = [
  { path: '', redirectTo: '/future', pathMatch: 'full' },
  { path: 'future', component: FutureComponent, },
  { path: 'past', component: PastComponent, },
  { path: 'present', component: PresentComponent, }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}