import { Component, OnInit } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
  
  
})
export class HabitsComponent implements OnInit {
  

  habits:any;
  habitSelected:any;
  isLoading:boolean;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
    this.isLoading=true;
    this.habits = [
      { num: "1" , name:"Gym Attendance"},
      { num: "2" , name:"No Sugar"},
      { num: "3",  name:"No Smoking"},
      { num: "4",  name:"Walk 5km"},
      { num: "5",  name:"Cook at home"}
    ]
  }

  


  showHabit(habit){
    this.habitSelected = habit;
    this.isLoading=false;
  }

  closeHabit(){
    this.habitSelected = undefined;
  }


  }


