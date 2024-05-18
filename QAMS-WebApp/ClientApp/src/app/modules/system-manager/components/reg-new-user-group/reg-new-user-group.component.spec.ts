import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNewUserGroupComponent } from './reg-new-user-group.component';

describe('RegNewUserGroupComponent', () => {
  let component: RegNewUserGroupComponent;
  let fixture: ComponentFixture<RegNewUserGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegNewUserGroupComponent]
    });
    fixture = TestBed.createComponent(RegNewUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
