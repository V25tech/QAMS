import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAReviewComponent } from './qa-review.component';

describe('QAReviewComponent', () => {
  let component: QAReviewComponent;
  let fixture: ComponentFixture<QAReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QAReviewComponent]
    });
    fixture = TestBed.createComponent(QAReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
