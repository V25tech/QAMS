import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationQaDecisionComponent } from './deviation-qa-decision.component';

describe('DeviationQaDecisionComponent', () => {
  let component: DeviationQaDecisionComponent;
  let fixture: ComponentFixture<DeviationQaDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationQaDecisionComponent]
    });
    fixture = TestBed.createComponent(DeviationQaDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
