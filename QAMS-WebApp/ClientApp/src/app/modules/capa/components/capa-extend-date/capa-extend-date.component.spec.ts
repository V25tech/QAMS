import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaExtendDateComponent } from './capa-extend-date.component';

describe('CapaExtendDateComponent', () => {
  let component: CapaExtendDateComponent;
  let fixture: ComponentFixture<CapaExtendDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaExtendDateComponent]
    });
    fixture = TestBed.createComponent(CapaExtendDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
