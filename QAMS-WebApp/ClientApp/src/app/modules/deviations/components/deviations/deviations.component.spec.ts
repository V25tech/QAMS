import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationsComponent } from './deviations.component';

describe('DeviationsComponent', () => {
  let component: DeviationsComponent;
  let fixture: ComponentFixture<DeviationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationsComponent]
    });
    fixture = TestBed.createComponent(DeviationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
