import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationActionPlansComponent } from './deviation-action-plans.component';

describe('DeviationActionPlansComponent', () => {
  let component: DeviationActionPlansComponent;
  let fixture: ComponentFixture<DeviationActionPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationActionPlansComponent]
    });
    fixture = TestBed.createComponent(DeviationActionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
