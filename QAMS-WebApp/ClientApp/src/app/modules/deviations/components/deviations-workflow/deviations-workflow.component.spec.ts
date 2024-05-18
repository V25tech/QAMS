import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationsWorkflowComponent } from './deviations-workflow.component';

describe('DeviationsWorkflowComponent', () => {
  let component: DeviationsWorkflowComponent;
  let fixture: ComponentFixture<DeviationsWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationsWorkflowComponent]
    });
    fixture = TestBed.createComponent(DeviationsWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
