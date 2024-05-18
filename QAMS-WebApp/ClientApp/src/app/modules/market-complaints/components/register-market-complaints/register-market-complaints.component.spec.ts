import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMarketComplaintsComponent } from './register-market-complaints.component';

describe('RegisterMarketComplaintsComponent', () => {
  let component: RegisterMarketComplaintsComponent;
  let fixture: ComponentFixture<RegisterMarketComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterMarketComplaintsComponent]
    });
    fixture = TestBed.createComponent(RegisterMarketComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
