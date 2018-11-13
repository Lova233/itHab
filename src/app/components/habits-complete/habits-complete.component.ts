import { Component, OnInit } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habits-complete',
  templateUrl: './habits-complete.component.html',
  styleUrls: ['./habits-complete.component.css']
})
export class HabitsCompleteComponent implements OnInit {


  habits:any;
  habit:any
  habitSelected:any;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
    this.habits = [
      { num: "one",   frq:[1,2,3,7], status:""}, 
      { num: "two",   frq:[5,6,7], status:""},
      { num: "three", frq:[2,3,6,5,7], status:""},
      { num: "four",  frq:[1,2,3,4], status:""},
      { num: "five",  frq:[1,4,6], status:""}
    ]}


  showHabit(habit){
    this.habitSelected = habit;
  }

  closeHabit(){
    this.habitSelected = undefined;
  }
  completeHabit(){
    this.habitSelected.status = true; 
  }


  }
