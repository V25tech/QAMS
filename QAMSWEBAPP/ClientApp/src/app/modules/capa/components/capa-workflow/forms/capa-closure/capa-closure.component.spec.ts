import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaClosureComponent } from './capa-closure.component';

describe('CapaClosureComponent', () => {
  let component: CapaClosureComponent;
  let fixture: ComponentFixture<CapaClosureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaClosureComponent]
    });
    fixture = TestBed.createComponent(CapaClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
