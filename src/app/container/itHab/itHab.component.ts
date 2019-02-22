import { Component, OnInit } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { of } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'it-hab',
  templateUrl: './itHab.component.html',
  styleUrls: ['./itHab.component.css']
})
export class itHabComponent implements OnInit {

  // habitsComplete: any;
  // habits:any;
  // allComplete:any;
  // toShow:any;
  isFutureOpen:boolean;
  isPastOpen:boolean;
  isPresentOpen:boolean;


  constructor(private habitService : HabitService) { }

  ngOnInit() {
    this.isFutureOpen = true;
      }

  openFuture(){
    this.isFutureOpen = true;
    this.isPastOpen = false;
    this.isPresentOpen = false;
  }
  openPast(){
    this.isPastOpen = true;
    this.isFutureOpen = false;
    this.isPresentOpen = false;
  }
  openPresent(){
    this.isPresentOpen = true;
    this.isPastOpen = false;
    this.isFutureOpen = false;
  }

  // getCompleted(e){
  //   let completed = this.habitsComplete.filter(habit=> habit.Task_id=== e.Task_id);
  //   return {...e,completed}

  // }


  // transform(task,allCompleted,week){

  //   let tempAll = allCompleted;
  //   allCompleted=[];
  //   let tempTask = task;
  //   tempTask.completed = week;
  //   tempTask.completed = tempTask.completed.map((t)=>{
  //     let status = tempAll.filter(x=>
  //       x.Task_id === tempTask.Task_id && t.isSame(moment.unix(x.Completed_at)));
        
  //       if(status.length>0){

  //       return status[0].Completed ? {status:"CMP"} : {status:"NC"}
  //     } else{
  //       return  {status:"NA"}
  //     }

  //   })

  //   return {...tempTask,week};
  // }
  // getAllCompleted(){
  //  this.habitsComplete = this.habits.map(h=>this.getCompleted(h))
  // }

  // getWeeks(numberOfWeeks:number){
  //   let startDate = moment();
  //   let weeks=[];
  //   for(let i=1;i<=numberOfWeeks;i++){
  //     weeks.push(this.previousWeek(startDate))
  //     startDate.subtract(i,"weeks");
  //   }
  //   console.log(weeks);
  //   return weeks;
  // }

  // previousWeek(date){
  //   let startWeek = date;
  //   let endWeek = moment(startWeek);
  //   let week =[]
  //   startWeek.startOf("week").add(1,"day").subtract(1,"week");
  //   endWeek.endOf("week").add(1,"day").subtract(1,"week");
  //   let a= 0;
  //   while(startWeek.isSameOrBefore(endWeek)){

  //     week.push(moment(startWeek));
  //     startWeek.add(1,"day");
  //     a++;
  //   }
  //   return week;

  // }

  // getWeekObject(numOfWeek){
  //   let weeks = this.getWeeks(numOfWeek);
  //   return weeks.map(w=> this.habits.map(h =>this.transform(h,this.allComplete,w)));
  // }

  // suca(num){
  //   this.toShow = this.getWeekObject(num);
  // }
}
