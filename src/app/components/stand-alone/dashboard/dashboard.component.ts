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
  @Input()single:any;
  @Input()habits:any;
  @Input()monday:Array<any>;
  @Input()tuesday:Array<any>;
  @Input()wednesday:Array<any>;
  @Input()thursday:Array<any>;
  @Input()friday:Array<any>;
  @Input()saturday:Array<any>;
  @Input()sunday:Array<any>;
  customColors:Array<any>;
  view: any[] = [400, 400];
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  showLegend = false;
  colorScheme = {
      domain: ['#F4ED59', '#ED1E24', '#E97825', '#912AD6', '#00A651']	
    };
 
    // F4ED71 912AD6

  constructor() { }

  ngOnInit() {
    this.today = moment().format("MMMM DD YYYY"); 
    this.isLoading=true;
    this.customColors = [
      { 
        name: this.single[0].name,
        value: '#0000ff'
      }
  ];
    setTimeout(() => {
      console.log(this.single)
    }, 3000);
    
  }

}
