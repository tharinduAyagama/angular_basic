import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

  public id;
  public name;

  constructor(private route: ActivatedRoute) {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let name = this.route.snapshot.paramMap.get('name');
    this.id = id;
    this.name =name;
  }

  ngOnInit() {
  }

}
