import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

var myWindow = window as any;

@Component({
  selector: 'app-week-component',
  templateUrl: './week-component.component.html',
  styleUrls: ['./week-component.component.css']
})

export class WeekComponentComponent implements OnInit {
  @Input()
  week:any;
  @Input()
  toShow:any;
  @Output() insight = new EventEmitter<any>();
  report:any;
  weekDays:Array<string> = ['Mon','Tue','Wed','Thr','Fri','Sat','Sun'];
  perCompleted:any;
  constructor() { }

  ngOnInit(){
    myWindow.report = this.week;
  }

}