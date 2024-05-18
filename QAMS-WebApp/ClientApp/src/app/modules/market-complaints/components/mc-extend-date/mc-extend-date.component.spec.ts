import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McExtendDateComponent } from './mc-extend-date.component';

describe('McExtendDateComponent', () => {
  let component: McExtendDateComponent;
  let fixture: ComponentFixture<McExtendDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McExtendDateComponent]
    });
    fixture = TestBed.createComponent(McExtendDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
