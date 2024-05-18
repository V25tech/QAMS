import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationClosureComponent } from './deviation-closure.component';

describe('DeviationClosureComponent', () => {
  let component: DeviationClosureComponent;
  let fixture: ComponentFixture<DeviationClosureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationClosureComponent]
    });
    fixture = TestBed.createComponent(DeviationClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
