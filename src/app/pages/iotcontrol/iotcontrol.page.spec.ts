import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotcontrolPage } from './iotcontrol.page';

describe('IotcontrolPage', () => {
  let component: IotcontrolPage;
  let fixture: ComponentFixture<IotcontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotcontrolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotcontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
