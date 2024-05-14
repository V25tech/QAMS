import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDocumentsComponent } from './mc-documents.component';

describe('McDocumentsComponent', () => {
  let component: McDocumentsComponent;
  let fixture: ComponentFixture<McDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McDocumentsComponent]
    });
    fixture = TestBed.createComponent(McDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
