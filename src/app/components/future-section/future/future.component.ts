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
  @Input()monday:Array<any>;
  @Input()tuesday:Array<any>;
  @Input()wednesday:Array<any>;
  @Input()thursday:Array<any>;
  @Input()friday:Array<any>;
  @Input()saturday:Array<any>;
  @Input()sunday:Array<any>;
  @Output() createHabitEmit:EventEmitter<any> = new EventEmitter();
 
  constructor(private habitService : HabitService) {

   }

  ngOnInit() {
    this.todayDate.toDateString()
    this.isLoading= true;
    setTimeout(() => {
    console.log(this.habits)

    }, 3000);
  }

  showPattern(){
    this.isPatternOn = !this.isPatternOn;
  }

  createHabit(e){
    this.createHabitEmit.emit(e);
  }
}
