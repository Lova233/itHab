import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {HabitService} from '../../../services/habit.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
  }
)

export class PresentComponent implements OnInit {
  @Input()habits: any;
  @Output()completedPayload: EventEmitter<any> = new EventEmitter();
  isPatternOn: boolean;
  isLoaded: boolean;
  parsedToday: string;
  currentMonth: any;
  parsedMonth: any;
  dayNumber: any;
  today: any;
  constructor(private habitService: HabitService) { }


ngOnInit() {
  this.isLoaded = false;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  this.today = new Date().getDay();
  this.currentMonth = new Date().getMonth();
  this.dayNumber = new Date().getDate();
  this.parsedMonth = monthNames[this.currentMonth];
  this.parsedToday = this.parseDay(this.today);
}

completeHabit(habitComplete) {
  this.completedPayload.emit(habitComplete);
  }
  parseDay(x: number) {
    switch (x) {
      case 1:
      return 'Monday';
      break;

      case 2:
      return 'Tuesday';
      break;

      case 3:
      return 'Wednesday';
      break;

      case 4:
      return 'Thursday';
      break;

      case 5:
      return 'Friday';
      break;

      case 6:
      return 'Saturday';
      break;

      case 0:
      return 'Sunday';
      break;
    }
  }

}

