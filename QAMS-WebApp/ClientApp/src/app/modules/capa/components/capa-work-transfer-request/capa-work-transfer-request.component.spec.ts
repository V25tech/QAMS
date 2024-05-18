import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaWorkTransferRequestComponent } from './capa-work-transfer-request.component';

describe('CapaWorkTransferRequestComponent', () => {
  let component: CapaWorkTransferRequestComponent;
  let fixture: ComponentFixture<CapaWorkTransferRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaWorkTransferRequestComponent]
    });
    fixture = TestBed.createComponent(CapaWorkTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
