import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule as AppMaterialModule } from '../app/app-material-module';

//* CONTAINER * //

import {itHabComponent} from '../../src/app/container/itHab/itHab..component'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PastComponent } from './containers/past/past.component';
import { PresentComponent } from './containers/present/present.component';
import { FutureComponent } from './containers/future/future.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HabitsComponent } from './components/habits/habits.component';
import { HabitsPatternComponent } from './components/habits-pattern/habits-pattern.component';
import { HabitsCompleteComponent } from './components/habits-complete/habits-complete.component';
import { HabitService } from '../app/services/habit.service'
import { HttpClientModule } from '@angular/common/http';
import { HabitComponent } from './components/habit/habit.component';


import { ParseDayPipe } from './pipes/days.pipe';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { WeekComponentComponent } from './components/week-component/week-component.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    itHabComponent,
    AppComponent,
    DashboardComponent,
    PastComponent,
    PresentComponent,
    FutureComponent,
    NavbarComponent,
    HabitsComponent,
    HabitsPatternComponent,
    HabitsCompleteComponent,
    HabitComponent,
    ParseDayPipe,
    AdminPanelComponent,
    WeekComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule
   ],
  providers: [HabitService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
