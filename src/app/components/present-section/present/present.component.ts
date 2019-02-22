import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {HabitService} from '../../../services/habit.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
  }
)

export class PresentComponent implements OnInit {
  @Input()habits:any;
  @Output()completedPayload : EventEmitter<any> = new EventEmitter();
  isPatternOn: boolean;
  isLoaded:boolean;

  constructor(private habitService : HabitService){ }


ngOnInit() {
  this.isLoaded= false;
}

completeHabit(habitComplete){
  this.completedPayload.emit(habitComplete)   
  }
}

