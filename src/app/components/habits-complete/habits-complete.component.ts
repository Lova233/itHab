import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habits-complete',
  templateUrl: './habits-complete.component.html',
  styleUrls: ['./habits-complete.component.css']
})
export class HabitsCompleteComponent implements OnInit {

@Output()
  completedHabit : EventEmitter<any> = new EventEmitter();

 @Input()
  habits:any;

  habit:any
  habitSelected:any;
  faTimes = faTimes;
  today:any;
  parsedToday:string;
  todaysHabit:any;

  constructor() { }

  ngOnInit() {
   this.today = new Date().getDay();
   this.parsedToday = this.parseDay(this.today)
   this.todaysHabit = this.habits.filter(a => a.Frequency.values.includes(this.today));
  }
  showHabit(habit){
    this.habitSelected = habit;
    console.log(this.habitSelected.Color,"la selezionata")
  }

  completeHabit(){
  
    let habitCompl= {
      task_id: this.habitSelected.Task_id,
      completed: true
    }
    this.completedHabit.emit(habitCompl);
  }

  uncompleteHabit(){
    let habitCompl= {
      task_id: this.habitSelected.Task_id,
      completed: false
    }
    this.completedHabit.emit(habitCompl);
  }

  parseDay(x:number){
    switch (x){
      case 1:
      return "Monday";
      break;

      case 2:
      return "Tuesday";
      break;

      case 3:
      return "Wednesday";
      break;

      case 4: 
      return "Thursday";
      break;

      case 5:
      return "Friday";
      break;

      case 6:
      return "Saturday";
      break;

      case 7:
      return "Sunday";
      break;
    }
  }


  }
