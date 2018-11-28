import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
  
  
})
export class HabitsComponent implements OnInit {
  
  @Input()
  habits:any;
  @Output()
    createHabit : EventEmitter<any> = new EventEmitter();
    
  habitSelected:any;
  isLoading:boolean;
  parsedFqr:Array<any>;
  faTimes = faTimes;
  e: string;

  constructor() { }

  ngOnInit() {
    this.isLoading=true;
    console.log("habits",this.habits)

  }


  showHabit(habit){
    this.habitSelected = habit;
    this.isLoading=false;    


    let parsedDay = this.habitSelected.Frequency.values.sort((a,b)=>a-b).map(x => this.parseDay(x));
    console.log(parsedDay,"moltiplicati");
    this.e = parsedDay.toString();
    console.log(this.e,"to String");

  }

  closeHabit(){
    this.habitSelected = undefined;
  }
  newHabit(){
    this.createHabit.emit(this.habitSelected);
    this.closeHabit()
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


