import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTransferRequestComponent } from './work-transfer-request.component';

describe('WorkTransferRequestComponent', () => {
  let component: WorkTransferRequestComponent;
  let fixture: ComponentFixture<WorkTransferRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTransferRequestComponent]
    });
    fixture = TestBed.createComponent(WorkTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
