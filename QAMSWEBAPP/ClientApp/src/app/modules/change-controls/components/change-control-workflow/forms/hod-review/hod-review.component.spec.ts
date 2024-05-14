import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODReviewComponent } from './hod-review.component';

describe('HODReviewComponent', () => {
  let component: HODReviewComponent;
  let fixture: ComponentFixture<HODReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HODReviewComponent]
    });
    fixture = TestBed.createComponent(HODReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
