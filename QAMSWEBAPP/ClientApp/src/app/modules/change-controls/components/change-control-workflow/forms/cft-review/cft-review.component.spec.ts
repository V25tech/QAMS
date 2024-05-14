import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CftReviewComponent } from './cft-review.component';

describe('CftReviewComponent', () => {
  let component: CftReviewComponent;
  let fixture: ComponentFixture<CftReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CftReviewComponent]
    });
    fixture = TestBed.createComponent(CftReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
