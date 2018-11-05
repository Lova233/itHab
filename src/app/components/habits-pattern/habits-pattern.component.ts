import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habits-pattern',
  templateUrl: './habits-pattern.component.html',
  styleUrls: ['./habits-pattern.component.css']
})
export class HabitsPatternComponent implements OnInit {
    
    habits:any;

  constructor() { }

  ngOnInit() {

    this.habits = [
      { num: "one",   frq:[1,2,3,7]},
      { num: "two",   frq:[5,6,7]},
      { num: "three", frq:[2,3,6,5,7]},
      { num: "four",  frq:[1,2,3,4]},
      { num: "five",  frq:[1,4,6]}
    ]
  }
  

}
