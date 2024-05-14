import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationActionPlansReviewComponent } from './deviation-action-plans-review.component';

describe('DeviationActionPlansReviewComponent', () => {
  let component: DeviationActionPlansReviewComponent;
  let fixture: ComponentFixture<DeviationActionPlansReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationActionPlansReviewComponent]
    });
    fixture = TestBed.createComponent(DeviationActionPlansReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
