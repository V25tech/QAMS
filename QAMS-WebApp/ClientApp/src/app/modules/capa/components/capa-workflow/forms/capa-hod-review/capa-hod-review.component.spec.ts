import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaHodReviewComponent } from './capa-hod-review.component';

describe('CapaHodReviewComponent', () => {
  let component: CapaHodReviewComponent;
  let fixture: ComponentFixture<CapaHodReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaHodReviewComponent]
    });
    fixture = TestBed.createComponent(CapaHodReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
