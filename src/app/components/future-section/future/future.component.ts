import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HabitService } from '../../../services/habit.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  
  todayDate:Date = new Date();
  isPatternOn: boolean;
  isLoading:boolean;
  @Input()habits:any;
  @Output() createHabitEmit:EventEmitter<any> = new EventEmitter();
 
  constructor(private habitService : HabitService) {

   }

  ngOnInit() {
    this.todayDate.toDateString()
    this.isLoading= true;
    setTimeout(() => {
    }, 3000);
  }

  showPattern(){
    this.isPatternOn = !this.isPatternOn;
  }

  createHabit(e){
    this.createHabitEmit.emit(e);
  }
}
