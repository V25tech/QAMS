import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationActivitiesComponent } from './deviation-activities.component';

describe('DeviationActivitiesComponent', () => {
  let component: DeviationActivitiesComponent;
  let fixture: ComponentFixture<DeviationActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationActivitiesComponent]
    });
    fixture = TestBed.createComponent(DeviationActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
