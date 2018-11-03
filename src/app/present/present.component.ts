import { Component, OnInit } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  habitOne:boolean;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }


  showHabitOne(){
    this.habitOne = true;
  }

  closeHabit(){
    this.habitOne = false;
    console.log(this.habitOne)
  }
}
