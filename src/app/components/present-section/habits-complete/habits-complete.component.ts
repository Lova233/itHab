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
  habit:any;
  habitSelected:any;
  faTimes = faTimes;
  today:any;
  parsedToday:string;
  currentMonth:any;
  todaysHabit:any;
  parsedMonth:any;
  dayNumber:any;

  constructor() { }

  ngOnInit() {
   const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
   this.today = new Date().getDay();
   this.currentMonth = new Date().getMonth();
   this.parsedMonth = monthNames[this.currentMonth];
   this.parsedToday = this.parseDay(this.today);
   this.dayNumber = new Date().getDate();
   this.todaysHabit = this.habits.filter(a => a.Frequency.values.includes(this.today));
   console.log(this.parsedToday,this.currentMonth, this.parsedMonth,this.dayNumber,"il giorno di oggi che dovrebbe essere 1")
  }
  showHabit(habit){
    this.habitSelected = habit;
    console.log(this.habitSelected.Color,"la selezionata")
  }

  completeHabit(isCompleted){
    let habitCompl= {
      task_id: this.habitSelected.Task_id,
      completed: isCompleted,
      color: this.habitSelected.Color,
      description: this.habitSelected.Description,
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
