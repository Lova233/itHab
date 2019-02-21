import { Component, OnInit, Input  } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  habits:any;
  isLoading:boolean;
  today:string;

  constructor() { }

  ngOnInit() {
    this.today = moment().format("MMMM DD YYYY"); 
    this.isLoading=true;
  }

}
