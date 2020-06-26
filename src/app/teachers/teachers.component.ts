import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  public teachers = [
    {"id":1 , "name":"waruni"},
    {"id":2 , "name":"maduhi"},
    {"id":3 , "name":"lakhi"},
    {"id":4 , "name":"raji"},
    {"id":5 , "name":"saji"}
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick(teacher){
      this.route.navigate(["/teachers" , teacher.id , teacher.name]);
  }

}
