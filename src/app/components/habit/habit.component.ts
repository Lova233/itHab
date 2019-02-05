import { Component, OnInit, Input} from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {

  @Input()
  habit;
  
  constructor() { }

  ngOnInit() {
  }

}
