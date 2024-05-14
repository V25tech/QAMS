import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationQaReviewComponent } from './deviation-qa-review.component';

describe('DeviationQaReviewComponent', () => {
  let component: DeviationQaReviewComponent;
  let fixture: ComponentFixture<DeviationQaReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationQaReviewComponent]
    });
    fixture = TestBed.createComponent(DeviationQaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
