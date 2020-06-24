import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-referance-variable',
  templateUrl: './template-referance-variable.component.html',
  styleUrls: ['./template-referance-variable.component.scss']
})
export class TemplateReferanceVariableComponent implements OnInit {

  public x = "";
  constructor() { }

  ngOnInit() {
  }

  displayName(value){
      this.x = value;
  }
}
