import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 

 
@Injectable()
export class HabitService {
  constructor(private http: HttpClient) {}
 
  url:string = "https://5crz9cn1p2.execute-api.eu-west-2.amazonaws.com/ithab";
  endPoints:any;
 
  getUserHabits(payload:string): Observable<any> {
    console.log(payload)
    return this.http
      .get<any>(this.url+"/tasks/"+payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
 
  addTask(payload: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(payload);
    return this.http
      .post<any>(this.url+"/add-task", JSON.stringify(payload),{headers:headers})
      .pipe(catchError((error: any) =>{ 
        console.log(error)
        return error;
      }
        ));
  }

  activation(payload: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
   
    return this.http
      .post<any>(this.url+"/activation", JSON.stringify(payload),{headers:headers})
      .pipe(catchError((error: any) =>{ 
        console.log(error)
        return error;
      }
      ));
  }
 
  // applyJob(payload: any): Observable<Job> {
  //   const user = this.authService.getAuthenticatedUser().getUsername();
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json');
  //   let applyObject={
  //     id:payload.Job_id,
  //     user
  //   }
  //   return this.http
  //     .post<Job>(this.url+"/apply", JSON.stringify(applyObject),{headers:headers})
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
 
 
}