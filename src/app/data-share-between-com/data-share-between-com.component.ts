import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-share-between-com',
  templateUrl: './data-share-between-com.component.html',
  styleUrls: ['./data-share-between-com.component.scss']
})
export class DataShareBetweenComComponent implements OnInit {

  @Input('parentName') public pName;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.childEvent.emit('this iis from child');
  }

}
