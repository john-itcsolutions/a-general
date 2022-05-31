import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdanalysisPage } from './prodanalysis.page';

describe('ProdanalysisPage', () => {
  let component: ProdanalysisPage;
  let fixture: ComponentFixture<ProdanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdanalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
