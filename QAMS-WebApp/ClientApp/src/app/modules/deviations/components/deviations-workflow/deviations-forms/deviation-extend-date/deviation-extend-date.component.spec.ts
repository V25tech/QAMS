import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationExtendDateComponent } from './deviation-extend-date.component';

describe('DeviationExtendDateComponent', () => {
  let component: DeviationExtendDateComponent;
  let fixture: ComponentFixture<DeviationExtendDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationExtendDateComponent]
    });
    fixture = TestBed.createComponent(DeviationExtendDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
