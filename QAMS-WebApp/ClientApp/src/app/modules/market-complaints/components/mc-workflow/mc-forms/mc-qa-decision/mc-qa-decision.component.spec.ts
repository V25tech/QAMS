import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McQaDecisionComponent } from './mc-qa-decision.component';

describe('McQaDecisionComponent', () => {
  let component: McQaDecisionComponent;
  let fixture: ComponentFixture<McQaDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McQaDecisionComponent]
    });
    fixture = TestBed.createComponent(McQaDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
