import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainaccessPage } from './blockchainaccess.page';

describe('BlockchainaccessPage', () => {
  let component: BlockchainaccessPage;
  let fixture: ComponentFixture<BlockchainaccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainaccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainaccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
