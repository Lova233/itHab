import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { of } from 'rxjs';
import * as moment from 'moment';



@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  @Input()
  toShow:any;
  @Output()
  changeViewEmitter : EventEmitter<number> = new EventEmitter()

  constructor(private habitService : HabitService) { }

  ngOnInit() {}
  changeView(numOfWeek){
    this.changeViewEmitter.emit(numOfWeek);
  }
}
