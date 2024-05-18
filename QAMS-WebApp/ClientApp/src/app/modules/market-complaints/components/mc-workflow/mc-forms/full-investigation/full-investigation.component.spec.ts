import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInvestigationComponent } from './full-investigation.component';

describe('FullInvestigationComponent', () => {
  let component: FullInvestigationComponent;
  let fixture: ComponentFixture<FullInvestigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullInvestigationComponent]
    });
    fixture = TestBed.createComponent(FullInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
