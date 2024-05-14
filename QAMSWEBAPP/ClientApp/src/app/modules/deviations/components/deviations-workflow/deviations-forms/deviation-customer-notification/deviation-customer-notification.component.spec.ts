import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationCustomerNotificationComponent } from './deviation-customer-notification.component';

describe('DeviationCustomerNotificationComponent', () => {
  let component: DeviationCustomerNotificationComponent;
  let fixture: ComponentFixture<DeviationCustomerNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationCustomerNotificationComponent]
    });
    fixture = TestBed.createComponent(DeviationCustomerNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
