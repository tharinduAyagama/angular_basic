import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student = [
    {name:'tharindu' , age:10 , grade:11},
    {name:'hirantha' , age:20 , grade:1},
    {name:'bandara' , age:27 , grade:13},
    {name:'ayagama' , age:18 , grade:12},
  ]
  constructor() { }
}
