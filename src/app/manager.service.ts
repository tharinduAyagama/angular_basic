import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IManager } from './manager';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  
  constructor(private http:HttpClient) {}

  getManager():Observable<IManager[]>{
    return this.http.get<IManager[]>('/assets/data/managerDetails.json');
  }
}
