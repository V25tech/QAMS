import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationsAuditTrailsComponent } from './deviations-audit-trails.component';

describe('DeviationsAuditTrailsComponent', () => {
  let component: DeviationsAuditTrailsComponent;
  let fixture: ComponentFixture<DeviationsAuditTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationsAuditTrailsComponent]
    });
    fixture = TestBed.createComponent(DeviationsAuditTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
