import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritystatusPage } from './securitystatus.page';

describe('SecuritystatusPage', () => {
  let component: SecuritystatusPage;
  let fixture: ComponentFixture<SecuritystatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritystatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritystatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
