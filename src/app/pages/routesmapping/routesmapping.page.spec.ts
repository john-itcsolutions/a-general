import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesmappingPage } from './routesmapping.page';

describe('RoutesmappingPage', () => {
  let component: RoutesmappingPage;
  let fixture: ComponentFixture<RoutesmappingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesmappingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesmappingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
