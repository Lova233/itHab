import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {HabitService} from '../../../services/habit.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  start: any;
  end: any;
  habits: any;

  constructor(private habitService: HabitService) { }

  ngOnInit() {
  //  this.start = 1546348017;
  //  this.end = 1547730178;

   this.start =  moment('2018-01-01');
   this.end = moment('2019-04-29');
   this.habitService.getUserHabits('AndreaLovati').subscribe(
    habits => {
      this.habits = habits.filter(habit => habit.IsActive);
      console.log(this.habits, ' QUA CI SONO');
    }
  );
    // For(DateToStart>DateToEnd){
    //   day = dateToStart.getDay()
    //   tasksToday = tasks.filter(find tasks for the day)
    //   completed = Math.random()*10+1%2 ? true : false
    //   forEach(task : tasksToday){
    //   hibitService.completed({
    //   Task_Id: task.Task_id,
    //   timestamp: dateToStart.timestamp()
    //   })
    //   dateToStart--;
    //   }
  }


  generateTaskCompleted() {
    let on = true;
    while (on) {
      if (this.start.isBefore(this.end)) {
      this.start.add(1, 'days');
      const tasks = this.habits.filter(habit => habit.Frequency.values.includes(this.start.day()));
      tasks.forEach((task) => {
        const completed = Math.random() * 10 > 3 ? true : false;
        const payload = {task_id: task.Task_id, username: 'AndreaLovati', completed_at: this.start.unix(), completed};
        console.log(payload);
        this.habitService.completed(payload).subscribe(res => console.log(res));
      }
      );
    } else {
    on = false;
  }

    }
  }

}
