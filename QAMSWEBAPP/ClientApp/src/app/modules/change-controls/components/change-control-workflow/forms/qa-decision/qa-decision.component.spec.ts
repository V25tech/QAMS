import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaDecisionComponent } from './qa-decision.component';

describe('QaDecisionComponent', () => {
  let component: QaDecisionComponent;
  let fixture: ComponentFixture<QaDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QaDecisionComponent]
    });
    fixture = TestBed.createComponent(QaDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
