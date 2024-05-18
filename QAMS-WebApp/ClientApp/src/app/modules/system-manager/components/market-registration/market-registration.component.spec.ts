import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRegistrationComponent } from './market-registration.component';

describe('MarketRegistrationComponent', () => {
  let component: MarketRegistrationComponent;
  let fixture: ComponentFixture<MarketRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketRegistrationComponent]
    });
    fixture = TestBed.createComponent(MarketRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
