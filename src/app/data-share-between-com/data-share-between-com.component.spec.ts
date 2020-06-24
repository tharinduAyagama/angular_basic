import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShareBetweenComComponent } from './data-share-between-com.component';

describe('DataShareBetweenComComponent', () => {
  let component: DataShareBetweenComComponent;
  let fixture: ComponentFixture<DataShareBetweenComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataShareBetweenComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShareBetweenComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
