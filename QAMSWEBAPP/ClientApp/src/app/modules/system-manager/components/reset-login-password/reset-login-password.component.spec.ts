import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetLoginPasswordComponent } from './reset-login-password.component';

describe('ResetLoginPasswordComponent', () => {
  let component: ResetLoginPasswordComponent;
  let fixture: ComponentFixture<ResetLoginPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetLoginPasswordComponent]
    });
    fixture = TestBed.createComponent(ResetLoginPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
