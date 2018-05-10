import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepicker1Component } from './datepicker1.component';

describe('Datepicker1Component', () => {
  let component: Datepicker1Component;
  let fixture: ComponentFixture<Datepicker1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datepicker1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datepicker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
