import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarqrcodesPage } from './barqrcodes.page';

describe('BarqrcodesPage', () => {
  let component: BarqrcodesPage;
  let fixture: ComponentFixture<BarqrcodesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarqrcodesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarqrcodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
