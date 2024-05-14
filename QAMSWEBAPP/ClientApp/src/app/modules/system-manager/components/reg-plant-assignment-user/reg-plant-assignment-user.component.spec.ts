import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPlantAssignmentUserComponent } from './reg-plant-assignment-user.component';

describe('RegPlantAssignmentUserComponent', () => {
  let component: RegPlantAssignmentUserComponent;
  let fixture: ComponentFixture<RegPlantAssignmentUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegPlantAssignmentUserComponent]
    });
    fixture = TestBed.createComponent(RegPlantAssignmentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
