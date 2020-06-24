import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-switch-for',
  templateUrl: './ng-if-switch-for.component.html',
  styleUrls: ['./ng-if-switch-for.component.scss']
})
export class NgIfSwitchForComponent implements OnInit {

  public truthy = true;
  public col = "green";
  public students = ["tharindu" , "hirantha" , "bandara" , "ayagama"]
  constructor() { }

  ngOnInit() {
  }

}
