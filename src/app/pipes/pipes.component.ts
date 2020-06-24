import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public name = "Tharindu ayagama";
  public student = {
    name: 'tharindu',
    age: '29'
  }
  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
