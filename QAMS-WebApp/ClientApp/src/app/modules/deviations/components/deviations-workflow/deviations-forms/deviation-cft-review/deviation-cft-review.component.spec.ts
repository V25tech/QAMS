import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationCftReviewComponent } from './deviation-cft-review.component';

describe('DeviationCftReviewComponent', () => {
  let component: DeviationCftReviewComponent;
  let fixture: ComponentFixture<DeviationCftReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationCftReviewComponent]
    });
    fixture = TestBed.createComponent(DeviationCftReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
