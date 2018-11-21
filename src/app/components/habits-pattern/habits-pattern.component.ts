import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habits-pattern',
  templateUrl: './habits-pattern.component.html',
  styleUrls: ['./habits-pattern.component.css']
})
export class HabitsPatternComponent implements OnInit {
    
    habits:any;
    monday:Array<any>;
    tuesday:Array<any>;
    wednesday:Array<any>;
    thursday:Array<any>;
    friday:Array<any>;
    saturday:Array<any>;
    sunday:Array<any>;
    
  constructor() { }

  ngOnInit() {

    this.habits = [
      { num: "one",   frq:[1,2,3,7]},
      { num: "two",   frq:[5,6,7]},
      { num: "three", frq:[2,3,6,5,7]},
      { num: "four",  frq:[1,2,3,4]},
      { num: "five",  frq:[1,4,6]}
    ]

    //  filte monday = habits when frq = 1

    this.monday = this.habits.filter(habit =>  habit.frq.includes(1));
    this.tuesday = this.habits.filter(habit =>  habit.frq.includes(2));
    this.wednesday = this.habits.filter(habit =>  habit.frq.includes(3));
    this.thursday = this.habits.filter(habit =>  habit.frq.includes(4));
    this.friday = this.habits.filter(habit =>  habit.frq.includes(5));
    this.saturday = this.habits.filter(habit =>  habit.frq.includes(6));
    this.sunday = this.habits.filter(habit =>  habit.frq.includes(7));

    console.log(this.monday, "dave è bravo con il filter")  
  }
  

}
