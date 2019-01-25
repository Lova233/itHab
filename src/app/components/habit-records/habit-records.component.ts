import { Component, OnInit, Input, } from '@angular/core';
import { CompileTemplateMetadata } from '@angular/compiler';
import { ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { reduce } from 'rxjs/operators';


@Component({
  selector: 'app-habit-records',
  templateUrl: './habit-records.component.html',
  styleUrls: ['./habit-records.component.css']
})
export class HabitRecordsComponent{
  @Input()
  habitsComplete:any;
  formattedHabits:any;


  
  

  constructor(private cdRef:ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
 
      // this.formattedHabits = this.transfromTaskCompleted(this.habitsComplete);


    //   this.formattedHabits = this.habitsComplete.map(item => ({
    //     activities: item.completed.map(activity => ({
    //       [activity.Completed_at]:{
    //         completed: activity.Completed,
    //         frequency: item.Frequency.values,
    //         description: item.Description,
    //         color: item.Color,
    //         task_id:item.Task_id,
    //       }
    //       })),
    //   }))
    //    this.formattedHabits = this.formattedHabits.reduce((r, { activities }) => {
    //     activities.forEach(o => Object
    //         .entries(o)
    //         .forEach(([k, v]) => (r[k] = r[k] || []).push(v))
    //     );
    //     return r;
    // }, {});


      console.log( this.formattedHabits,"coi");
      // this.monday = this.formattedHabits.map(habit => habit.frequency.filter(this.isTheDay))
      console.log(this.formattedHabits,"asd")
      this.cdRef.detectChanges();



    }
    transfromTaskCompleted(habitsComplete){
      const reduce = (tasks)=>{
        let completed = tasks.reduce(
          (entities: {
              [id: string]: any
          }, task,index) => {
            console.log(entities,task,index);
            if(index<2) entities = {[entities.Completed_at]: entities.Completed}
            return {
                  ...entities,
                  [task.Completed_at]: task.Completed,
                 
              }
          });
        return completed;
  
      }

      let tasks = habitsComplete.reduce(
        (entities: {
            [id: string]: any
        }, task,index) => {
          console.log(entities,task,index);
          if(index<2) entities = {[entities.Task_id]: reduce(entities.completed)}
          return {
                ...entities,
                [task.Task_id]: reduce(task.completed),
               
            }
        });
        return tasks;
    }

  }
      //Need to modify this to recieve as input the choosen date
    // this.weekHabits = this.formattedHabits.map(habit =>({
    //     description: habit.description,
    //     color: habit.color,
    //     frequecy: habit.frequecy,
    //     activities: {
    //       completed_at:habit.activities.filter(item => item.completed_at <= 1546964467),
    //     }
    //   }))    }}

  // getTimeStamp(){
  //   this.habitsComplete.forEach((task)=>{
  //     let color = task.Color;
  //     let frequecy = task.Frequency.values;
  //     let id = task.Task_id;
  //     let isActive = task.isActive;
  //     let time = task.completed.map(t=>t.Completed_at = new Date(t.Completed_at * 1000).toLocaleDateString())
  //     let isCompleted = task.completed.map(t=>t.Completed)
  //     let formattedHabits = {
  //       color:color,
  //       frequecy:frequecy,
  //       id:id,
  //       completed_At: {
  //         time:time,
  //         isCompleted:isCompleted
  //       },
  //     }
  //     console.log(formattedHabits,"pulito")
  //   }
