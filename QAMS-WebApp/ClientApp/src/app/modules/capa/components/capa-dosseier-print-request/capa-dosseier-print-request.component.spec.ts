import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaDosseierPrintRequestComponent } from './capa-dosseier-print-request.component';

describe('CapaDosseierPrintRequestComponent', () => {
  let component: CapaDosseierPrintRequestComponent;
  let fixture: ComponentFixture<CapaDosseierPrintRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaDosseierPrintRequestComponent]
    });
    fixture = TestBed.createComponent(CapaDosseierPrintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
