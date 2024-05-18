import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCapaComponent } from './register-capa.component';

describe('RegisterCapaComponent', () => {
  let component: RegisterCapaComponent;
  let fixture: ComponentFixture<RegisterCapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCapaComponent]
    });
    fixture = TestBed.createComponent(RegisterCapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
