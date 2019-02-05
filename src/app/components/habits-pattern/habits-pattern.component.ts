import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-habits-pattern',
  templateUrl: './habits-pattern.component.html',
  styleUrls: ['./habits-pattern.component.css']
})
export class HabitsPatternComponent implements OnInit {
    @Input()
    monday:Array<any>;  
    @Input()
    tuesday:Array<any>;
    @Input()
    wednesday:Array<any>;
    @Input()
    thursday:Array<any>;
    @Input()
    friday:Array<any>;
    @Input()
    saturday:Array<any>;
    @Input()
    sunday:Array<any>;

   
    
  constructor() { 
    
  }

  ngOnInit() {

    //  filte monday = habits when Frequency.values = 1
    

    // console.log(this.habit);

    
  }
  

}
