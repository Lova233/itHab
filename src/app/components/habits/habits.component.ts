import { Component, OnInit } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
  
  
})
export class HabitsComponent implements OnInit {
  

  habits:any;
  habitSelected:any;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {

    this.habits = [
      { num: "one"},
      { num: "two"},
      { num: "three"},
      { num: "four"},
      { num: "five"}
    ]
  }

  


  showHabit(habit){
    this.habitSelected = habit;
  }

  closeHabit(){
    this.habitSelected = undefined;
  }


  }


