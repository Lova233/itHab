import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { of } from 'rxjs';
import * as moment from 'moment';
import { colorSets } from '@swimlane/ngx-charts/release/utils';



@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  @Input()
  toShow: any;
  @Input()
  endWeek: any;
  @Input()
  startWeek: any;
  @Input()
  week: any;
  @Output()
  changeViewEmitter: EventEmitter<number> = new EventEmitter();
  report: any;
  single: any[];
  multi: any[];

  view: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Total completion';
  showYAxisLabel = true;
  yAxisLabel = 'Habit';

  colorScheme = {
    domain: ['#F4ED59', '#ED1E24', '#E97825', '#912AD6', '#00A651']
  };




  isHistoryOpen = false;

  constructor(private habitService: HabitService) { }

  ngOnInit() {

  }
  changeView(numOfWeek) {
    this.changeViewEmitter.emit(numOfWeek);
    this.isHistoryOpen = !this.isHistoryOpen;
    setTimeout(() => {
    this.report = this.toShow.map((task) => (task.map(x => ({
      color: x.Color,
      name: x.Description,
      value: x.completed.filter(singleTask => singleTask.status == 'CMP').length,
      notcompleted: x.completed.filter(singleTask => singleTask.status == 'NC').length,
      total: (x.completed.filter(singleTask => singleTask.status == 'CMP').length) + (x.completed.filter(singleTask => singleTask.status == 'NC').length)
    }))));
    console.log(this.report, 'report');
    }, 3000);
  }

}
