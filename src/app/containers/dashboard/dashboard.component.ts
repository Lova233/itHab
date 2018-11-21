import { Component, OnInit } from '@angular/core';


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
    // this.store.dispatch(new fromHabit.LoadHabits());

  }

  showFuture(){
    this.isFutureOn = !this.isFutureOn;
  }

}
