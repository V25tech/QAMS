import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevitionDossierPrintRequestComponent } from './devition-dossier-print-request.component';

describe('DevitionDossierPrintRequestComponent', () => {
  let component: DevitionDossierPrintRequestComponent;
  let fixture: ComponentFixture<DevitionDossierPrintRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevitionDossierPrintRequestComponent]
    });
    fixture = TestBed.createComponent(DevitionDossierPrintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
