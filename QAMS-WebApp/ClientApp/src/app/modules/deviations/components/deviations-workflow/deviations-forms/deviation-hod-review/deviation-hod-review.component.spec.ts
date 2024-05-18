import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationHodReviewComponent } from './deviation-hod-review.component';

describe('DeviationHodReviewComponent', () => {
  let component: DeviationHodReviewComponent;
  let fixture: ComponentFixture<DeviationHodReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationHodReviewComponent]
    });
    fixture = TestBed.createComponent(DeviationHodReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
