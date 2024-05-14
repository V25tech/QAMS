import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaWorkflowComponent } from './capa-workflow.component';

describe('CapaWorkflowComponent', () => {
  let component: CapaWorkflowComponent;
  let fixture: ComponentFixture<CapaWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaWorkflowComponent]
    });
    fixture = TestBed.createComponent(CapaWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
