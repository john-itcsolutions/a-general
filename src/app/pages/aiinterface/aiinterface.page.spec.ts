import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiinterfacePage } from './aiinterface.page';

describe('AiinterfacePage', () => {
  let component: AiinterfacePage;
  let fixture: ComponentFixture<AiinterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiinterfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiinterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
