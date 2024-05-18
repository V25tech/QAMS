import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McAuditTrailsComponent } from './mc-audit-trails.component';

describe('McAuditTrailsComponent', () => {
  let component: McAuditTrailsComponent;
  let fixture: ComponentFixture<McAuditTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McAuditTrailsComponent]
    });
    fixture = TestBed.createComponent(McAuditTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
