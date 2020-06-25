import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IManager } from './manager';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  
  constructor(private http:HttpClient) {}

  getManager(): Observable<IManager[]>{
    return this.http.get<IManager[]>('/assets/data/managerDetails.json');
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "server error");
    
  }
  //.catch(this.errorHandler)
}
