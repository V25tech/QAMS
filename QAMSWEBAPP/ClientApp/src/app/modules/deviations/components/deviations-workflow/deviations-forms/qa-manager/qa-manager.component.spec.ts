import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaManagerComponent } from './qa-manager.component';

describe('QaManagerComponent', () => {
  let component: QaManagerComponent;
  let fixture: ComponentFixture<QaManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QaManagerComponent]
    });
    fixture = TestBed.createComponent(QaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
