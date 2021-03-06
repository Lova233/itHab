import { Component, OnInit, Input } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { of, Observable } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'it-hab',
  templateUrl: './itHab.component.html',
  styleUrls: ['./itHab.component.css']
})
export class itHabComponent implements OnInit {
  habits: any;
  isLoading: boolean;
  @Input()isFutureOpen: boolean;
  @Input()isPastOpen: boolean;
  @Input()isPresentOpen: boolean;
  monday: Observable<Array<any>>;
  tuesday: Observable<Array<any>>;
  wednesday: Observable<Array<any>>;
  thursday: Observable<Array<any>>;
  friday: Observable<Array<any>>;
  saturday: Observable<Array<any>>;
  sunday: Observable<Array<any>>;
  single: any;
  allComplete: any;
  toShow: Observable<any>;
  habitsComplete: any;
  reports: any;
  isMainMenuOpen = true;
  opened = false;
  startWeek: any;
  endWeek: any;


    // pie


  constructor(private habitService: HabitService, private router: Router) { }


  ngOnInit() {
    this.getTaks();
  }

  openFuture() {
    this.isFutureOpen = true;
    this.isPastOpen = false;
    this.isPresentOpen = false;
  }
  openPast() {
    this.isPastOpen = true;
    this.isFutureOpen = false;
    this.isPresentOpen = false;
  }
  openPresent() {
    this.isPresentOpen = true;
    this.isPastOpen = false;
    this.isFutureOpen = false;
  }

  menuOpenFuture() {
    this.isFutureOpen = true;
    this.isPastOpen = false;
    this.isPresentOpen = false;
    this.isMainMenuOpen = false;
  }
  menuOpenPast() {
    this.isPastOpen = true;
    this.isFutureOpen = false;
    this.isPresentOpen = false;
    this.isMainMenuOpen = false;
  }
  menuOpenPresent() {
    this.isPresentOpen = true;
    this.isPastOpen = false;
    this.isFutureOpen = false;
    this.isMainMenuOpen = false;
  }

  goToMainMenu() {
    this.isMainMenuOpen = true;
  }








  getTaks() {
    this.habitService.getUserHabits('AndreaLovati').subscribe(
      habits => {
        this.habits = habits.filter(habit => habit.IsActive);
        this.habits = this.habits.sort((a, b) => b.Color.replace('#', '0x') - a.Color.replace('#', '0x'));
        this.monday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(1)));
        this.tuesday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(2)));
        this.wednesday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(3)));
        this.thursday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(4)));
        this.friday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(5)));
        this.saturday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(6)));
        this.sunday = of(this.habits.filter(habit =>  habit.Frequency.values.includes(7)));
        this.single = this.habits.map(h => {
          return ({
            name: h.Description,
            value: h.Frequency.values.length,
            color: h.Color,
          });
        });
        this.isLoading = false;
        this.habitService.getTasksCompleted('AndreaLovati').subscribe(
          habits => {
           this.allComplete = habits;
           this.habitsComplete = this.getAllCompleted(habits).map(habit => {
              habit.color;
              habit.completed.sort((a, b) => a.Completed_at - b.Completed_at);
              this.changeView(1);
              });
          });
      }
   );

}


saveHabit(habitComplete) {
  const payload = {...habitComplete, username: 'AndreaLovati', completed_at: null, color: habitComplete.color, description: habitComplete.description};
  this.habitService.completed(payload).subscribe(res => console.log(res)
  );

  }
  getAllCompleted(habits) {
    const getCompleted = (e) => {
      const completed = habits.filter(habit => habit.Task_id === e.Task_id);
      return {...e, completed};

    };
   return this.habits.map(h => getCompleted(h));
  }

  getWeekObject(numOfWeek) {
    const previousWeek = (date) => {
      const startWeek = date;
      const endWeek = moment(startWeek);
      const week = [];
      startWeek.startOf('week').add(1, 'day').subtract(1, 'week');
      endWeek.endOf('week').add(1, 'day').subtract(1, 'week');
      let a = 0;
      while (startWeek.isSameOrBefore(endWeek)) {
        week.push(moment(startWeek));
        startWeek.add(1, 'day');
        a++;
      }
      this.startWeek = startWeek.format('DD/MM/YYYY');
      this.endWeek = endWeek.format('DD/MM/YYYY');
      return week;
    };

    const getWeeks = (numberOfWeeks: number) => {
      const startDate = moment();
      console.log(startDate,"initial")
      const weeks = [];
      for (let i = 1; i <= numberOfWeeks; i++) {
        weeks.push(previousWeek(startDate));
        console.log(startDate,"startdate")
        startDate.subtract(1, 'weeks');
        console.log(startDate,"final")
      }
      return weeks;
    };
    const transform = (task, allCompleted, week) => {
      const tempAll = allCompleted;
      allCompleted = [];
      const tempTask = task;
      tempTask.completed = week;
      tempTask.completed = tempTask.completed.map((t) => {
        
        const status = tempAll.filter(x =>
          x.Task_id === tempTask.Task_id && t.isSame(moment.unix(x.Completed_at)));
          if (status.length > 0) { return status[0].Completed ? {status: 'CMP'} : {status: 'NC'}; } else { return  {status: 'NA'}; }
      });
      return {...tempTask, week};
    };

    const weeks = getWeeks(numOfWeek);
    return weeks.map(w => this.habits.map(h => transform(h, this.allComplete, w)));
  }

  changeView(numOfweeks) {
    this.toShow = of(this.getWeekObject(numOfweeks));
  }
  toggleSidebar() {
    this.opened = !this.opened;
  }






  // ************************************FUTURE ************************************
  createHabit(e) {
    const freqString = e.Frequency.values.map(String);
    const newFreq = e.Frequency.values.map(n => parseInt(n));
    const newFreqHabit = this.habits.filter((habit) => habit.Task_id == e.Task_id)[0];
    newFreqHabit.Frequency.values = e.Frequency.values.map(n => parseInt(n));

    const newHabit = {
      username: 'AndreaLovati',
      color: e.Color,
      frequency: freqString,
      description: e.Description
    };

    const habitToReplace = {
      username : 'AndreaLovati',
      task_id : e.Task_id,
      isActivated : false
    };

    this.habitService.addTask(newHabit).subscribe(res => {
      this.habitService.activation(habitToReplace).subscribe(res => {
        this.getTaks();
      });

    });
  }

}
