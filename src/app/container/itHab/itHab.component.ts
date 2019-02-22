import { Component, OnInit } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { of, Observable } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'it-hab',
  templateUrl: './itHab.component.html',
  styleUrls: ['./itHab.component.css']
})
export class itHabComponent implements OnInit {
  habits:any;
  isLoading:boolean;
  isFutureOpen:boolean;
  isPastOpen:boolean;
  isPresentOpen:boolean;
  monday:Observable<Array<any>>;
  tuesday:Observable<Array<any>>;
  wednesday:Observable<Array<any>>;
  thursday:Observable<Array<any>>;
  friday:Observable<Array<any>>;
  saturday:Observable<Array<any>>;
  sunday:Observable<Array<any>>;


  constructor(private habitService : HabitService) { }

  ngOnInit() {
    this.getTaks();  
    this.isFutureOpen = true;
      }

  openFuture(){
    this.isFutureOpen = true;
    this.isPastOpen = false;
    this.isPresentOpen = false;
  }
  openPast(){
    this.isPastOpen = true;
    this.isFutureOpen = false;
    this.isPresentOpen = false;
  }
  openPresent(){
    this.isPresentOpen = true;
    this.isPastOpen = false;
    this.isFutureOpen = false;
  }
  getTaks(){
    this.habitService.getUserHabits("AndreaLovati").subscribe(
      habits=> {
        this.habits=habits.filter(habit=>habit.IsActive);
        this.habits = this.habits.sort((a,b)=> b.Color.replace("#", "0x")-a.Color.replace("#", "0x"));
        this.monday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(1)));
        this.tuesday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(2)));
        this.wednesday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(3)));
        this.thursday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(4)));
        this.friday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(5)));
        this.saturday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(6)));
        this.sunday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(7)));
        this.isLoading = false;
        console.log(this.monday);
      }
   )
}}