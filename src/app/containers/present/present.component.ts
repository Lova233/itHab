import { Component, OnInit } from '@angular/core';
import {HabitService} from '../../services/habit.service';




@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {
  
  isPatternOn: boolean;
  habits:any;
  isLoaded:boolean;

  constructor(private habitService : HabitService){ }


ngOnInit() {
  this.isLoaded= false;
  this.habitService.getUserHabits("AndreaLovati").subscribe(
    habits=> {
      this.habits=habits.filter(habit=>habit.IsActive)
      this.habits = this.habits.sort((a,b)=> b.Color.replace("#", "0x")-a.Color.replace("#", "0x"));
      this.isLoaded=true
      console.log(this.habits," QUA CI SONO");
    }
  )
}

completeHabit(habitComplete){
  
  let payload = {...habitComplete,username:"AndreaLovati",completed_at:null}
  console.log(payload);
this.habitService.completed(payload).subscribe(res=>console.log(res));
}



}

