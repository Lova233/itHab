import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  isPatternOn: boolean;

  constructor() { }

  ngOnInit() {
  }

  showPattern(){
    this.isPatternOn = !this.isPatternOn;
    console.log(this.isPatternOn)
  }

}
