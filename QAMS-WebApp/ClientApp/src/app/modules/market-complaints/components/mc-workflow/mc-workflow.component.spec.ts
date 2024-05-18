import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McWorkflowComponent } from './mc-workflow.component';

describe('McWorkflowComponent', () => {
  let component: McWorkflowComponent;
  let fixture: ComponentFixture<McWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McWorkflowComponent]
    });
    fixture = TestBed.createComponent(McWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
