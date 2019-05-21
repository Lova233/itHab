import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { of } from 'rxjs';
import * as moment from 'moment';




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
  @Input()
  single:any;
  @Output()
  changeViewEmitter: EventEmitter<number> = new EventEmitter();
  report: any = [];
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
  streak:any[];
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  animations = true;
  colorScheme = {
    domain: ['#F4ED59', '#ED1E24', '#E97825', '#912AD6', '#00A651']
  };

  week1:"13/05/2019 - 19/05/2019"
  week2:"6/05/2019 - 12/05/2019"
  week3:"29/04/2019 - 05/05/2019"
  week4:"21/04/2019 - 28/04/2019"

  
  isHistoryOpen = false;

  constructor(private habitService: HabitService) { }

  ngOnInit() {
    this.streak = [
      {
        "name": "Run 3km",
        "value": 2
      },
      {
        "name": "Code Exercise",
        "value": 4
      },
      {
        "name": "Read 300pg",
        "value": 2
      },
      {
        "name": "Drink 2lt water",
        "value": 7
      },
      {
        "name": "Work out",
        "value": 6
      },
    ]
  
  }
  changeView(numOfWeek) {
    // const 
    this.changeViewEmitter.emit(numOfWeek);
    this.isHistoryOpen = !this.isHistoryOpen;
    setTimeout(() => {
    this.end = this.toShow[0][0].week[6];
    console.log(this.toShow,"toshow")
    this.start = this.toShow[this.toShow.length-1][0].week[0]
    this.toShow.forEach((task,index) => this.report.push(this.findValues(task,index)));
    this.end = moment(this.end).format("DD-MM-YYYY")
    this.start = moment(this.start).format("DD-MM-YYYY");
    })}

findValues(task,index){
  let item=[]
  task.forEach((x,index)=>{
    let value = x.completed.filter(singleTask => singleTask.status === 'CMP').length
    let notcompleted = x.completed.filter(singleTask => singleTask.status === 'NC').length
    let startdate = x.week[0].format("DD/M/YY")
    let enddate = x.week[6].format("DD/M/YY")
     item[index]={
      color: x.Color,
      name: x.Description,
      value: value,
      notcompleted,
      total: value + notcompleted,
      week:startdate + " - " + enddate,
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