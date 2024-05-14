import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaQaReviewComponent } from './capa-qa-review.component';

describe('CapaQaReviewComponent', () => {
  let component: CapaQaReviewComponent;
  let fixture: ComponentFixture<CapaQaReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaQaReviewComponent]
    });
    fixture = TestBed.createComponent(CapaQaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
