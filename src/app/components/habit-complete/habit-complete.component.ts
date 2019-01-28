import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-habit-complete',
  templateUrl: './habit-complete.component.html',
  styleUrls: ['./habit-complete.component.css']
})
export class HabitCompleteComponent implements OnInit {

  @Input()habits;

  constructor() { }

  ngOnInit() {
    console.log(this.habits,"asdasd")
  }

}
