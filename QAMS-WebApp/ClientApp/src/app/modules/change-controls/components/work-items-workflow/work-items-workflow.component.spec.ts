import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemsWorkflowComponent } from './work-items-workflow.component';

describe('WorkItemsWorkflowComponent', () => {
  let component: WorkItemsWorkflowComponent;
  let fixture: ComponentFixture<WorkItemsWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkItemsWorkflowComponent]
    });
    fixture = TestBed.createComponent(WorkItemsWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
