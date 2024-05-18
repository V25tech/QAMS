import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcAuditTrailsComponent } from './cc-audit-trails.component';

describe('CcAuditTrailsComponent', () => {
  let component: CcAuditTrailsComponent;
  let fixture: ComponentFixture<CcAuditTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcAuditTrailsComponent]
    });
    fixture = TestBed.createComponent(CcAuditTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
