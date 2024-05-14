import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationsWorkTransferRequestComponent } from './deviations-work-transfer-request.component';

describe('DeviationsWorkTransferRequestComponent', () => {
  let component: DeviationsWorkTransferRequestComponent;
  let fixture: ComponentFixture<DeviationsWorkTransferRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationsWorkTransferRequestComponent]
    });
    fixture = TestBed.createComponent(DeviationsWorkTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
