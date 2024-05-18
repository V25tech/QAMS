import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaCftReviewComponent } from './capa-cft-review.component';

describe('CapaCftReviewComponent', () => {
  let component: CapaCftReviewComponent;
  let fixture: ComponentFixture<CapaCftReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaCftReviewComponent]
    });
    fixture = TestBed.createComponent(CapaCftReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
