import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaAuditTrailsComponent } from './capa-audit-trails.component';

describe('CapaAuditTrailsComponent', () => {
  let component: CapaAuditTrailsComponent;
  let fixture: ComponentFixture<CapaAuditTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaAuditTrailsComponent]
    });
    fixture = TestBed.createComponent(CapaAuditTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
