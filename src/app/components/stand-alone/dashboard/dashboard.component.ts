import { Component, OnInit, Input  } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoading:boolean;
  today:string;
  @Input()habits:any;
  @Input()monday:Array<any>;
  @Input()tuesday:Array<any>;
  @Input()wednesday:Array<any>;
  @Input()thursday:Array<any>;
  @Input()friday:Array<any>;
  @Input()saturday:Array<any>;
  @Input()sunday:Array<any>;

  constructor() { }

  ngOnInit() {
    this.today = moment().format("MMMM DD YYYY"); 
    this.isLoading=true;
  }

}
