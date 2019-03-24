import { Component, OnInit, Input } from '@angular/core';

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
  report:any;
  weekDays:any;
  constructor() { }

  ngOnInit() {   
    this.report =this.week.map(task=>{
      let completed = task.completed.filter(singleTask=>singleTask.status=="CMP").length;
      let notcompleted = task.completed.filter(singleTask=>singleTask.status=="NC").length;
      console.log(completed,notcompleted)
      return Math.round(completed/(completed+notcompleted)*100);
    })
    this.weekDays = ['Mon','Tue','Wed','Thr','Fri','Sat','Sun']
  }
 
}
