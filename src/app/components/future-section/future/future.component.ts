import { Component, OnInit, Input } from '@angular/core';
import { HabitService } from '../../../services/habit.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  
  todayDate:Date = new Date();
  isPatternOn: boolean;
  isLoading:boolean;
  @Input()habits:any;
  @Input()monday:Array<any>;
  @Input()tuesday:Array<any>;
  @Input()wednesday:Array<any>;
  @Input()thursday:Array<any>;
  @Input()friday:Array<any>;
  @Input()saturday:Array<any>;
  @Input()sunday:Array<any>;

 
  constructor(private habitService : HabitService) {

   }

  ngOnInit() {
    this.todayDate.toDateString()
    this.isLoading= true;
    setTimeout(() => {
    console.log(this.habits)

    }, 3000);
  }

  showPattern(){
    this.isPatternOn = !this.isPatternOn;
  }

  createHabit(e){
    let freqString = e.Frequency.values.map(String);
    let newFreq = e.Frequency.values.map(n=>parseInt(n));
    let newFreqHabit= this.habits.filter((habit)=>habit.Task_id ==e.Task_id)[0];
    newFreqHabit.Frequency.values=e.Frequency.values.map(n=>parseInt(n));
    this.habits=  this.habits.filter((habit)=>habit.Task_id !=e.Task_id);
    this.habits.push(newFreqHabit)


    console.log(this.habits,"diozcann")
    let newHabit = {
      username: "AndreaLovati",
      color: e.Color,
      frequency: freqString,
      description: e.Description
    }
    
    let habitToReplace={
      username : "AndreaLovati",
      task_id : e.Task_id,
      isActivated : false
    }

    this.habitService.addTask(newHabit).subscribe(res=>{
      this.habitService.activation(habitToReplace).subscribe(res=>{
        // this.getTaks();
      });

    });
  }
}
