import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngdesignPage } from './engdesign.page';

describe('EngdesignPage', () => {
  let component: EngdesignPage;
  let fixture: ComponentFixture<EngdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngdesignPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
