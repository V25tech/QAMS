import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureCCComponent } from './closure-cc.component';

describe('ClosureCCComponent', () => {
  let component: ClosureCCComponent;
  let fixture: ComponentFixture<ClosureCCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosureCCComponent]
    });
    fixture = TestBed.createComponent(ClosureCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
