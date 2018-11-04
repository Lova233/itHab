import { Component, OnInit } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  habits:any;
  habitSelected:any;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
    this.habits = [
      { num: "one"},
      { num: "two"},
      { num: "three"},
      { num: "four"},
      { num: "five"}
    ]
  }


  showHabit(habit){
    this.habitSelected = habit;
  }

  closeHabit(){
    this.habitSelected = undefined;
  }
}
