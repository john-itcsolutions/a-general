import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityaccountsPage } from './equityaccounts.page';

describe('EquityaccountsPage', () => {
  let component: EquityaccountsPage;
  let fixture: ComponentFixture<EquityaccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityaccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityaccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
