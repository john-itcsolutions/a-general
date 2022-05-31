import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmPage } from './srm.page';

describe('SrmPage', () => {
  let component: SrmPage;
  let fixture: ComponentFixture<SrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
