import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksExternPage } from './tasks-extern.page';

describe('TasksExternPage', () => {
  let component: TasksExternPage;
  let fixture: ComponentFixture<TasksExternPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksExternPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksExternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
