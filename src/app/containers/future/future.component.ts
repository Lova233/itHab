import { Component, OnInit } from '@angular/core';
import {HabitService} from '../../services/habit.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  
  todayDate:Date = new Date();
  isPatternOn: boolean;
  habits:any;
  isLoading:boolean;
  monday:Array<any>;
  tuesday:Array<any>;
  wednesday:Array<any>;
  thursday:Array<any>;
  friday:Array<any>;
  saturday:Array<any>;
  sunday:Array<any>;

 
  constructor(private habitService : HabitService) {

   }

  ngOnInit() {
    this.todayDate.toDateString()
    console.log(this.todayDate)
    this.isLoading= true;
    this.getTaks();  

   
  }

  showPattern(){
    this.isPatternOn = !this.isPatternOn;
  }

  createHabit(e){
    console.log(e.Frequency.values.map(String) , "TO STRIng");
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
        this.getTaks();
      });

    });
    
    this.habits = this.habits.sort((a,b)=> b.Color.replace("#", "0x")-a.Color.replace("#", "0x"));
    this.monday = this.habits.filter(habit =>  habit.Frequency.values.includes(1));
    this.tuesday = this.habits.filter(habit =>  habit.Frequency.values.includes(2));
    this.wednesday = this.habits.filter(habit =>  habit.Frequency.values.includes(3));
    this.thursday = this.habits.filter(habit =>  habit.Frequency.values.includes(4));
    this.friday = this.habits.filter(habit =>  habit.Frequency.values.includes(5));
    this.saturday = this.habits.filter(habit =>  habit.Frequency.values.includes(6));
    this.sunday = this.habits.filter(habit =>  habit.Frequency.values.includes(7));
  }

  getTaks(){
    this.habitService.getUserHabits("AndreaLovati").subscribe(
      habits=> {
        this.habits=habits.filter(habit=>habit.IsActive)
        this.habits = this.habits.sort((a,b)=> b.Color.replace("#", "0x")-a.Color.replace("#", "0x"));

        this.monday = this.habits.filter(habit =>  habit.Frequency.values.includes(1));
        this.tuesday = this.habits.filter(habit =>  habit.Frequency.values.includes(2));
        this.wednesday = this.habits.filter(habit =>  habit.Frequency.values.includes(3));
        this.thursday = this.habits.filter(habit =>  habit.Frequency.values.includes(4));
        this.friday = this.habits.filter(habit =>  habit.Frequency.values.includes(5));
        this.saturday = this.habits.filter(habit =>  habit.Frequency.values.includes(6));
        this.sunday = this.habits.filter(habit =>  habit.Frequency.values.includes(7));
        this.isLoading = false;
      }
   )
  }



}
