import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDossierPrintRequestComponent } from './mc-dossier-print-request.component';

describe('McDossierPrintRequestComponent', () => {
  let component: McDossierPrintRequestComponent;
  let fixture: ComponentFixture<McDossierPrintRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McDossierPrintRequestComponent]
    });
    fixture = TestBed.createComponent(McDossierPrintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
