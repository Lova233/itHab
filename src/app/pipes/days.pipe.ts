import { Pipe } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Pipe({ name: 'parseDay' })


export class ParseDayPipe {
  days: any[];
  transform(day: Array<number>): string {

    return day.sort((a,b)=>a-b).map(x => this.parseDay(x)).toString();
    
     
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


 