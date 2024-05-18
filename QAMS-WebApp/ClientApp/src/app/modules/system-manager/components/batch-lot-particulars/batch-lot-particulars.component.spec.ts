import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchLotParticularsComponent } from './batch-lot-particulars.component';

describe('BatchLotParticularsComponent', () => {
  let component: BatchLotParticularsComponent;
  let fixture: ComponentFixture<BatchLotParticularsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchLotParticularsComponent]
    });
    fixture = TestBed.createComponent(BatchLotParticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
