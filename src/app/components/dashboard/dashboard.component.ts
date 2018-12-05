import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  habits:any;
  isLoading:boolean;

  constructor() { }

  ngOnInit() {
    this.isLoading=true;
    console.log(this.habits,"dash")
  }

}
