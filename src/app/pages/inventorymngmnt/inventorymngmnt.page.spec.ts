import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorymngmntPage } from './inventorymngmnt.page';

describe('InventorymngmntPage', () => {
  let component: InventorymngmntPage;
  let fixture: ComponentFixture<InventorymngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorymngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorymngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
