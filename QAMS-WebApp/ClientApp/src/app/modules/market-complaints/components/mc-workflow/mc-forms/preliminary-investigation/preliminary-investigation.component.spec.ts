import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreliminaryInvestigationComponent } from './preliminary-investigation.component';

describe('PreliminaryInvestigationComponent', () => {
  let component: PreliminaryInvestigationComponent;
  let fixture: ComponentFixture<PreliminaryInvestigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreliminaryInvestigationComponent]
    });
    fixture = TestBed.createComponent(PreliminaryInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
