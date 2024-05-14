import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlansReviewComponent } from './action-plans-review.component';

describe('ActionPlansReviewComponent', () => {
  let component: ActionPlansReviewComponent;
  let fixture: ComponentFixture<ActionPlansReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionPlansReviewComponent]
    });
    fixture = TestBed.createComponent(ActionPlansReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
