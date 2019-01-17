import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-habit-records',
  templateUrl: './habit-records.component.html',
  styleUrls: ['./habit-records.component.css']
})
export class HabitRecordsComponent{
  @Input()
  habitsComplete:any;

  constructor() { }

  ngAfterViewChecked(): void {
    console.log(this.habitsComplete, "nel componente")
  //  let habitSorted =  this.habitsComplete.Frequency.values.sort((a,b)=>a-b)
  //  console.log(habitSorted,)
  }
}
