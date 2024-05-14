import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaQaDecisionComponent } from './capa-qa-decision.component';

describe('CapaQaDecisionComponent', () => {
  let component: CapaQaDecisionComponent;
  let fixture: ComponentFixture<CapaQaDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaQaDecisionComponent]
    });
    fixture = TestBed.createComponent(CapaQaDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
