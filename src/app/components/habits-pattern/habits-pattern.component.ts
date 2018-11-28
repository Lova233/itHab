import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-habits-pattern',
  templateUrl: './habits-pattern.component.html',
  styleUrls: ['./habits-pattern.component.css']
})
export class HabitsPatternComponent implements OnInit {
    @Input()
    habits:any;
  

    monday:Array<any>;
    tuesday:Array<any>;
    wednesday:Array<any>;
    thursday:Array<any>;
    friday:Array<any>;
    saturday:Array<any>;
    sunday:Array<any>;
    
  constructor() { 
    
  }

  ngOnInit() {

    //  filte monday = habits when Frequency.values = 1
    this.monday = this.habits.filter(habit =>  habit.Frequency.values.includes(1));
    this.tuesday = this.habits.filter(habit =>  habit.Frequency.values.includes(2));
    this.wednesday = this.habits.filter(habit =>  habit.Frequency.values.includes(3));
    this.thursday = this.habits.filter(habit =>  habit.Frequency.values.includes(4));
    this.friday = this.habits.filter(habit =>  habit.Frequency.values.includes(5));
    this.saturday = this.habits.filter(habit =>  habit.Frequency.values.includes(6));
    this.sunday = this.habits.filter(habit =>  habit.Frequency.values.includes(7));
    console.log(this.habits);

    
    console.log(this.monday, "dave è bravo con il filter")  
  }
  

}
