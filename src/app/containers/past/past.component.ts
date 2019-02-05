import { Component, OnInit } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { of } from 'rxjs';
import * as moment from 'moment';


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
            this.allComplete =habits;
            this.habitsComplete=habits;
            this.getAllCompleted();
            this.habitsComplete.map(habit=>{
            habit.color;  
            habit.completed.sort((a,b)=> a.Completed_at - b.Completed_at);
            // habit.completed.map(t=>t.Completed_at = moment.unix(t.Completed_at));
          
            })
          })
        })}


  getCompleted(e){
    let completed = this.habitsComplete.filter(habit=> habit.Task_id=== e.Task_id);
    // console.log({...e,completed})
    return {...e,completed}
    
  }
  transform(task,allCompleted,date){
  
    let tempAll = allCompleted;
    allCompleted=[];
    let tempTask = task;
    tempTask.completed = this.previousWeek(date);
    tempTask.completed = tempTask.completed.map((t)=>{
      let status = tempAll.filter(x=> 
        x.Task_id === tempTask.Task_id && t.isSame(moment.unix(x.Completed_at)));
        if(status.length>0){
        return status[0].Completed ? {status:"CMP"} : {status:"NC"}
      } else{
        return  {status:"NA"}
      }
      
    })

    return {...tempTask,date};
  }
  getAllCompleted(){
   this.habitsComplete = this.habits.map(h=>this.getCompleted(h))
  }

  getWeeks(numberOfWeeks:number){
    let startDate = moment();
    let weeks=[];
    for(let i=1;i<=numberOfWeeks;i++){
      weeks.push(this.previousWeek(startDate))
      startDate.subtract(i,"weeks");
    }
    return weeks;
  }

  previousWeek(date){
    let startWeek = date;
    let endWeek = moment(startWeek);
    let week =[]
    startWeek.startOf("week").add(1,"day").subtract(1,"week");
    endWeek.endOf("week").add(1,"day").subtract(1,"week");
    let a= 0;
    while(startWeek.isSameOrBefore(endWeek)){
 
      week.push(moment(startWeek));
      startWeek.add(1,"day");
      a++;
    }
    return week;

  }

  getWeekObject(past,habitComplete,allCompleted){
    let allComplete = this.allComplete
    let temp = habitComplete;
    let tasks = temp.map(x=>this.transform(x,allCompleted,moment().subtract(past,"weeks")))
    return tasks
  }
}
