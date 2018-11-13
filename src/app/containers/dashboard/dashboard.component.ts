import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromHabit from '../../store';
import { Habits } from '../../models/habit.model'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isFutureOn:boolean
  store: any;

  constructor() { }

  ngOnInit() {
    this.isFutureOn = true;
    this.store.dispatch(new fromHabit.LoadHabits());

  }

  showFuture(){
    this.isFutureOn = !this.isFutureOn;
  }

}
