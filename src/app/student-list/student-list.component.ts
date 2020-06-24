import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students = [];
  constructor(private _studentService: StudentService) {
    this.students = _studentService.student;
  }

  ngOnInit() {
  }

}
