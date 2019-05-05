import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PresentDialogComponent } from "../present/present-dialog-overview";

@Component({
  selector: 'app-habits-complete',
  templateUrl: './habits-complete.component.html',
  styleUrls: ['./habits-complete.component.css']
})
export class HabitsCompleteComponent implements OnInit {

@Output()
  completedHabit: EventEmitter<any> = new EventEmitter();

 @Input()
  habits: any;
  habit: any;
  habitSelected: any;
  faTimes = faTimes;
  today: any;
  todaysHabit: any;

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
   this.today = new Date().getDay();
   setTimeout(() => {
    this.todaysHabit = this.habits.filter(a => a.Frequency.values.includes(this.today || 7));
   }, 400);
  }
  showHabit(habit) {
    this.habitSelected = habit;
  }

  completeHabit(isCompleted) {
    const habitCompl = {
      task_id: this.habitSelected.Task_id,
      completed: isCompleted,
      color: this.habitSelected.Color,
      description: this.habitSelected.Description,
    };
    this.todaysHabit.splice(this.todaysHabit.indexOf(this.habitSelected),1)
    this.showHabit(null)
    this.openModal()
    console.log(this.todaysHabit,"dopo")
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    id: 1,
    };
   const dialogRef = this.dialog.open(PresentDialogComponent, dialogConfig);
   dialogRef.afterClosed().subscribe(result => {
    console.log("dialogclosed")
   console.log(result)
   });
    }
}