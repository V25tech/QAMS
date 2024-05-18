import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaActionPlanComponent } from './capa-action-plan.component';

describe('CapaActionPlanComponent', () => {
  let component: CapaActionPlanComponent;
  let fixture: ComponentFixture<CapaActionPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaActionPlanComponent]
    });
    fixture = TestBed.createComponent(CapaActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
