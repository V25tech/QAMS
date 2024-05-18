import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTransfersComponent } from './work-transfers.component';

describe('WorkTransfersComponent', () => {
  let component: WorkTransfersComponent;
  let fixture: ComponentFixture<WorkTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTransfersComponent]
    });
    fixture = TestBed.createComponent(WorkTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
