import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferanceVariableComponent } from './template-referance-variable.component';

describe('TemplateReferanceVariableComponent', () => {
  let component: TemplateReferanceVariableComponent;
  let fixture: ComponentFixture<TemplateReferanceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferanceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferanceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
