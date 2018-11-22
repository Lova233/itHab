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
  parsedFqr:Array<any>;
  faTimes = faTimes;
  e: string;

  constructor() { }

  ngOnInit() {
    this.isLoading=true;
    this.habits = [
      { num: "1" , name:"Gym Attendance", frq:[1,2,5]},
      { num: "2" , name:"No Sugar", frq:[2,4,6,7]},
      { num: "3",  name:"No Smoking", frq:[2,4,5,7]},
      { num: "4",  name:"Walk 5km", frq:[1,2,5,6]},
      { num: "5",  name:"Cook at home", frq:[1,2,3]}
    ]
  }


  showHabit(habit){
    this.habitSelected = habit;
    this.isLoading=false;    


    let parsedDay = this.habitSelected.frq.map(x => this.parseDay(x));
    console.log(parsedDay,"moltiplicati");
    this.e = parsedDay.toString();
    console.log(this.e,"to String");

  }

  closeHabit(){
    this.habitSelected = undefined;
  }

  parseDay(x:number){
    switch (x){
      case 1:
      return "Mon";
      break;

      case 2:
      return "Tue";
      break;

      case 3:
      return "Wed";
      break;

      case 4: 
      return "Thur";
      break;

      case 5:
      return "Fri";
      break;

      case 6:
      return "Sat";
      break;

      case 7:
      return "Sun";
      break;
    }
  }


  }


