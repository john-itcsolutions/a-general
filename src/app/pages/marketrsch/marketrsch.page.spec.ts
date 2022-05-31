import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketrschPage } from './marketrsch.page';

describe('MarketrschPage', () => {
  let component: MarketrschPage;
  let fixture: ComponentFixture<MarketrschPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketrschPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketrschPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
