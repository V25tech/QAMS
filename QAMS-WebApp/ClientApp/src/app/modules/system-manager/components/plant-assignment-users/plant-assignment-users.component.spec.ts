import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantAssignmentUsersComponent } from './plant-assignment-users.component';

describe('PlantAssignmentUsersComponent', () => {
  let component: PlantAssignmentUsersComponent;
  let fixture: ComponentFixture<PlantAssignmentUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantAssignmentUsersComponent]
    });
    fixture = TestBed.createComponent(PlantAssignmentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
