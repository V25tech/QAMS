import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McWorkTransferRequestComponent } from './mc-work-transfer-request.component';

describe('McWorkTransferRequestComponent', () => {
  let component: McWorkTransferRequestComponent;
  let fixture: ComponentFixture<McWorkTransferRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McWorkTransferRequestComponent]
    });
    fixture = TestBed.createComponent(McWorkTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
