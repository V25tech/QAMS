import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPrintRequestComponent } from './dossier-print-request.component';

describe('DossierPrintRequestComponent', () => {
  let component: DossierPrintRequestComponent;
  let fixture: ComponentFixture<DossierPrintRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierPrintRequestComponent]
    });
    fixture = TestBed.createComponent(DossierPrintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
