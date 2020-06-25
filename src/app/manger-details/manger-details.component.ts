import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manger-details',
  templateUrl: './manger-details.component.html',
  styleUrls: ['./manger-details.component.scss']
})
export class MangerDetailsComponent implements OnInit {

  public managers = [];
  public err;
  constructor(private _managerSrevice: ManagerService) {
    this._managerSrevice.getManager()
    .subscribe(data => this.managers=data);
  }

  ngOnInit() {
  }
  // ,
  // error => this.err=error
}
