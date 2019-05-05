import { Component, OnInit, Input, EventEmitter, Output,  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FutureDialogComponent } from "../future-section/future/future-dialog-overview";




@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],


})
export class HabitsComponent implements OnInit {

  @Input()habits: any;
  @Output()createHabit: EventEmitter<any> = new EventEmitter();

  habitControl = new FormControl();
  frequencies: object[] = [
    {value: 1 , label: 'Monday'},
    {value: 2,  label: 'Tuesday'},
    {value: 3,  label: 'Wednesday'},
    {value: 4,  label: 'Thursday'},
    {value: 5,  label: 'Friday'},
    {value: 6,  label: 'Saturday'},
    {value: 7,  label: 'Sunday'}
  ];

  frequency: any;
  habitSelected: any;
  isLoading: boolean;
  parsedFqr: Array<any>;
  e: string;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.isLoading = true;
  }

  showHabit(habit) {
    this.habitSelected = habit;
    this.isLoading = false;
    const parsedDay = this.habitSelected.Frequency.values.sort((a, b) => a - b).map(x => this.parseDay(x));
    this.e = parsedDay.toString();
  }

  closeHabit() {
    this.habitSelected = undefined;
  }
  newHabit() {
    this.createHabit.emit(this.habitSelected);
    this.closeHabit();
    this.openModal();
  }


  parseDay(x: number) {
    switch (x) {
      case 1:
      return 'Mon';
      break;

      case 2:
      return 'Tue';
      break;

      case 3:
      return 'Wed';
      break;

      case 4:
      return 'Thur';
      break;

      case 5:
      return 'Fri';
      break;

      case 6:
      return 'Sat';
      break;

      case 7:
      return 'Sun';
      break;
    }
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    id: 1,
    };
   const dialogRef = this.dialog.open(FutureDialogComponent, dialogConfig);
   dialogRef.afterClosed().subscribe(result => {
    console.log("dialogclosed")
   console.log(result)
   });
    }


  }


