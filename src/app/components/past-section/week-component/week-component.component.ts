import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week-component',
  templateUrl: './week-component.component.html',
  styleUrls: ['./week-component.component.css']
})
export class WeekComponentComponent implements OnInit {
  @Input()
  fakedata:any;
  @Input()
  toShow:any;

  constructor() { }

  ngOnInit() {
    console.log(this.fakedata,"asdasdasdasdasdasdDIO")
    console.log(this.toShow.length)
  }

}
