import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeControlWorkflowComponent } from './change-control-workflow.component';

describe('ChangeControlWorkflowComponent', () => {
  let component: ChangeControlWorkflowComponent;
  let fixture: ComponentFixture<ChangeControlWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeControlWorkflowComponent]
    });
    fixture = TestBed.createComponent(ChangeControlWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
