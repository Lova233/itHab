import { Component, OnInit, Input, EventEmitter, Output,  } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { last } from 'rxjs/operators';




@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
  
  
})
export class HabitsComponent implements OnInit {
  
  @Input()
  habits:any;
  @Output()
  createHabit : EventEmitter<any> = new EventEmitter();
    
  habitControl = new FormControl();
  frequencies: object[] = [  
    {value: 1 , label:'Monday'},
    {value: 2,  label:'Tuesday'},
    {value: 3,  label:'Wednesday'},
    {value: 4,  label:'Thursday'},
    {value: 5,  label:'Friday'},
    {value: 6,  label:'Saturday'},
    {value: 7,  label:'Sunday'} 
  ];



  frequency:any;
  habitSelected:any;
  isLoading:boolean;
  parsedFqr:Array<any>;
  faTimes = faTimes;
  e: string;

  constructor() { }

  ngOnInit() {     
    console.log(this.habits,"nel complete")

    this.isLoading=true;
    console.log(this.habits,"QUELLE CARICATE nel componente")
    this.habits = this.habits.sort((a,b)=> a.Color-b.Color);
    console.log(this.habits,"quelle sortate")
  }

  showHabit(habit){
    this.habitSelected = habit;
    this.isLoading=false;    
    let parsedDay = this.habitSelected.Frequency.values.sort((a,b)=>a-b).map(x => this.parseDay(x));
    this.e = parsedDay.toString();

  }

  closeHabit(){
    this.habitSelected = undefined;
    // console.log(this.frequency.map(a => a.value))
  }
  newHabit(){
    this.createHabit.emit(this.habitSelected);
    this.closeHabit()


  }

  
  parseDay(x:number){
    switch (x){
      case 1:
      return "Mon";
      break;

      case 2:
      return "Tue";
      break;

      case 3:
      return "Wed";
      break;

      case 4: 
      return "Thur";
      break;

      case 5:
      return "Fri";
      break;

      case 6:
      return "Sat";
      break;

      case 7:
      return "Sun";
      break;
    }
  }


  }


