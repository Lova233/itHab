import { Component, OnInit } from '@angular/core';
import { HabitService } from '../../services/habit.service';


@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  habitsComplete: any;
  habits:any;
  allComplete:any;
  
  constructor(private habitService : HabitService) { }

  ngOnInit() {
    this.habitService.getUserHabits("AndreaLovati").subscribe(
      habits=> {
        this.habits = habits.filter(h=>h.IsActive);
        this.habitService.getTasksCompleted("AndreaLovati").subscribe(
          habits=>{
            this.habitsComplete=habits;
            this.getAllCompleted();
          })
      })
        

  }

  getCompleted(e){
    let completed = this.habitsComplete.filter(habit=> habit.Task_id=== e.Task_id);
    // console.log({...e,completed})
    return {...e,completed}
    
  }

  getAllCompleted(){
   this.habitsComplete = this.habits.map(h=>this.getCompleted(h));
  }


}
