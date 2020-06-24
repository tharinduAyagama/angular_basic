import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  public safeClass = "safe";
  public isSafe = false;
  public safeStyle = {
      "safe": this.isSafe,
      "makeBeautiful": true
  }
  public dangerStyle = {
      "danger": !this.isSafe,
      "makeBeautiful": true
  }
  constructor() { }

  ngOnInit() {
  }

}
