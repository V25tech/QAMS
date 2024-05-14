import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaActivitiesComponent } from './capa-activities.component';

describe('CapaActivitiesComponent', () => {
  let component: CapaActivitiesComponent;
  let fixture: ComponentFixture<CapaActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaActivitiesComponent]
    });
    fixture = TestBed.createComponent(CapaActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
