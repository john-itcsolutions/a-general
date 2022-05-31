import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmemclassesPage } from './netmemclasses.page';

describe('NetmemclassesPage', () => {
  let component: NetmemclassesPage;
  let fixture: ComponentFixture<NetmemclassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetmemclassesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetmemclassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
