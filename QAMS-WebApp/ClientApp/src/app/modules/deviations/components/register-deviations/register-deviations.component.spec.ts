import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeviationsComponent } from './register-deviations.component';

describe('RegisterDeviationsComponent', () => {
  let component: RegisterDeviationsComponent;
  let fixture: ComponentFixture<RegisterDeviationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDeviationsComponent]
    });
    fixture = TestBed.createComponent(RegisterDeviationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
