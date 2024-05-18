import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationsDocumentComponent } from './deviations-document.component';

describe('DeviationsDocumentComponent', () => {
  let component: DeviationsDocumentComponent;
  let fixture: ComponentFixture<DeviationsDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationsDocumentComponent]
    });
    fixture = TestBed.createComponent(DeviationsDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
