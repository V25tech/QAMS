import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationInvestigationsComponent } from './deviation-investigations.component';

describe('DeviationInvestigationsComponent', () => {
  let component: DeviationInvestigationsComponent;
  let fixture: ComponentFixture<DeviationInvestigationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationInvestigationsComponent]
    });
    fixture = TestBed.createComponent(DeviationInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
