import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { of } from 'rxjs';
import * as moment from 'moment';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';



@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  @Input()
  toShow: any;
  @Input()
  week: any;
  @Output()
  changeViewEmitter: EventEmitter<number> = new EventEmitter();
  report: any = [];
  single: any[];
  multi: any[];
  total:any[];
  view: any[] = [700, 300];
  start: any;
  end: any;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme = {
    domain: ['#F4ED59', '#ED1E24', '#E97825', '#912AD6', '#00A651']
  };

  isHistoryOpen = false;

  constructor(private habitService: HabitService) { }

  ngOnInit() {
  }
  changeView(numOfWeek) {
    // const 
    this.changeViewEmitter.emit(numOfWeek);
    this.isHistoryOpen = !this.isHistoryOpen;
    setTimeout(() => {
    this.end = this.toShow[0][0].week[6];
    this.start = this.toShow[this.toShow.length-1][0].week[0]
    this.toShow.forEach((task,index) => this.report.push(this.findValues(task,index)));
    
    this.end = moment(this.end).format("DD-MM-YYYY")
    this.start = moment(this.start).format("DD-MM-YYYY");
    // console.log(this.report,"IL REPORT")
    console.log(this.report,"quello prima")
    })}

findValues(task,index){
  let item=[]
  task.forEach((x,index)=>{
    let value = x.completed.filter(singleTask => singleTask.status === 'CMP').length
    let notcompleted = x.completed.filter(singleTask => singleTask.status === 'NC').length
     item[index]={
      color: x.Color,
      name: x.Description,
      value: value,
      notcompleted,
      total: value+notcompleted
    }
    console.log(item)
  })
  return item;
} 
findTotal = (task)=>{
    let sum=task;
    for(let i = 1; i<this.report.length; i++) {
      for(let x = 0; x <= 4; x++){
        if(this.report[i][x].name === task.name) {
          sum.value += this.report[i][x].value;
          sum.total += this.report[i][x].total;
          sum.notcompleted += this.report[i][x].notcompleted;
        }
      }
    }
    return sum;
  }

}