import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerDetailsComponent } from './manger-details.component';

describe('MangerDetailsComponent', () => {
  let component: MangerDetailsComponent;
  let fixture: ComponentFixture<MangerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
