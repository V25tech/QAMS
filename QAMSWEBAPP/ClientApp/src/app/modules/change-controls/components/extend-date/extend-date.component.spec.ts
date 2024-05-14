import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendDateComponent } from './extend-date.component';

describe('ExtendDateComponent', () => {
  let component: ExtendDateComponent;
  let fixture: ComponentFixture<ExtendDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendDateComponent]
    });
    fixture = TestBed.createComponent(ExtendDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
