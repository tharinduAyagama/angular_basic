import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styleUrls: ['./student-detail-list.component.scss']
})
export class StudentDetailListComponent implements OnInit {

  public students = [];
  constructor(private _studentService: StudentService) {
    this.students = _studentService.student;
  }

  ngOnInit() {
  }

}
