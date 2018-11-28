import { Component, OnInit, Input } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habits-complete',
  templateUrl: './habits-complete.component.html',
  styleUrls: ['./habits-complete.component.css']
})
export class HabitsCompleteComponent implements OnInit {
 @Input()
  habits:any;

  habit:any
  habitSelected:any;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {

  }


  showHabit(habit){
    this.habitSelected = habit;
  }

  closeHabit(){
    this.habitSelected = undefined;
  }
  completeHabit(){
    this.habitSelected.status = true; 
  }


  }
