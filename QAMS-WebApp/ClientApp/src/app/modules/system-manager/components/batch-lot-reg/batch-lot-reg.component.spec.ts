import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchLotRegComponent } from './batch-lot-reg.component';

describe('BatchLotRegComponent', () => {
  let component: BatchLotRegComponent;
  let fixture: ComponentFixture<BatchLotRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchLotRegComponent]
    });
    fixture = TestBed.createComponent(BatchLotRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
