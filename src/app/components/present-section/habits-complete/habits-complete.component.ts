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
  todaysHabit:any;

  constructor() { }

  ngOnInit() {
   this.today = new Date().getDay();
   this.todaysHabit = this.habits.filter(a => a.Frequency.values.includes(this.today));
  //  console.log(this.parsedToday,this.currentMonth, this.parsedMonth,this.dayNumber,"il giorno di oggi che dovrebbe essere 1")
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
}
