import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketComplaintsComponent } from './market-complaints.component';

describe('MarketComplaintsComponent', () => {
  let component: MarketComplaintsComponent;
  let fixture: ComponentFixture<MarketComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketComplaintsComponent]
    });
    fixture = TestBed.createComponent(MarketComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
