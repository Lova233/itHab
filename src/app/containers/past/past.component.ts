import { Component, OnInit } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { of } from 'rxjs';

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
            this.habitsComplete.map(habit=>{
            console.log(habit.completed)
            habit.color;  
            habit.completed.sort((a,b)=> a.Completed_at - b.Completed_at);
            habit.completed.map(t=>t.Completed_at = new Date(t.Completed_at * 1000).toDateString());
            console.log(this.habitsComplete,"observable")
            })
          })
        })}


  getCompleted(e){
    let completed = this.habitsComplete.filter(habit=> habit.Task_id=== e.Task_id);
    // console.log({...e,completed})
    return {...e,completed}
    
  }

  getAllCompleted(){
   this.habitsComplete = this.habits.map(h=>this.getCompleted(h))
  }

  // transfromTaskCompleted(habitsComplete){
  //   const reduce = (tasks)=>{
  //     let completed = tasks.reduce(
  //       (entities: {
  //           [id: string]: any
  //       }, task,index) => {
        
  //         if(index<2) entities = {[entities.Completed_at]: entities.Completed}
  //         return {
  //               ...entities,
  //               [task.Completed_at]: task.Completed,
               
  //           }
  //       });
  //       console.log(completed,"completed")
  //     return completed;

  //   }


  //   let tasks = habitsComplete.reduce(
  //     (entities: {
  //         [id: string]: any
  //     }, task,index) => {
        
  //       if(index<2) entities = {[entities.Task_id]: reduce(entities.completed)}
  //       return {
  //             ...entities,
  //             [task.Task_id]: reduce(task.completed),

             
  //         }
  //     });
  //     console.log(tasks,"asdasdasdasdasd")
  //     return tasks;
    }
