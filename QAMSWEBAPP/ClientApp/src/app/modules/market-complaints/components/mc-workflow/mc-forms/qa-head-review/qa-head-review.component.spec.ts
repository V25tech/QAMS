import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaHeadReviewComponent } from './qa-head-review.component';

describe('QaHeadReviewComponent', () => {
  let component: QaHeadReviewComponent;
  let fixture: ComponentFixture<QaHeadReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QaHeadReviewComponent]
    });
    fixture = TestBed.createComponent(QaHeadReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
