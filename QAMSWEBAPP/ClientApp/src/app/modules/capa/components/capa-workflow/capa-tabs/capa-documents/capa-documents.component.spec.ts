import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaDocumentsComponent } from './capa-documents.component';

describe('CapaDocumentsComponent', () => {
  let component: CapaDocumentsComponent;
  let fixture: ComponentFixture<CapaDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaDocumentsComponent]
    });
    fixture = TestBed.createComponent(CapaDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
