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

   this.start =  moment('2018-10-10');
   this.end = moment();
   this.habitService.getUserHabits('AndreaLovati').subscribe(
    habits => {
      this.habits = habits.filter(habit => habit.IsActive);
    }
  );
  }


  generateTaskCompleted() {
    let on = true;
    while (on) {
      if (this.start.isBefore(this.end)) {
      this.start.add(1, 'days');
      let day =this.start.day()== 0 ? 7 :this.start.day() ;
      const tasks = this.habits.filter(habit => habit.Frequency.values.includes(day));
      tasks.forEach((task) => {
        const completed = Math.random() * 10 > 3 ? true : false;
        const payload = {task_id: task.Task_id, username: 'AndreaLovati', completed_at: this.start.unix(), completed};
        this.habitService.completed(payload).subscribe(res => console.log(res));
      });
    } else {
    on = false;
  }}
}}
