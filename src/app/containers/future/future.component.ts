import { Component, OnInit } from '@angular/core';
import {HabitService} from '../../services/habit.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  isPatternOn: boolean;
  habits:any;
  isLoading:boolean;


 
  constructor(private habitService : HabitService) {

   }

  ngOnInit() {
    this.isLoading= true;
    this.habitService.getUserHabits("AndreaLovati").subscribe(
      habits=> {
        this.habits=habits.filter(habit=>habit.IsActive)
        this.isLoading=false
       
      }
   )

   
  }

  showPattern(){
    this.isPatternOn = !this.isPatternOn;
    console.log(this.isPatternOn)
  }

  createHabit(e){
    console.log(e);
    let freqString=e.Frequency.values.split(',')
   this.habits= this.habits.filter((habit)=>habit.Task_id !=e.Task_id);
    console.log("diosz",this.habits)
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
    console.log(habitToReplace)

    this.habitService.addTask(newHabit).subscribe(res=>console.log(res));
    this.habitService.activation(habitToReplace).subscribe(res=>console.log(res));
  }



}
