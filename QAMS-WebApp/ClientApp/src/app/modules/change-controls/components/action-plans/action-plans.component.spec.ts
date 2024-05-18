import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlansComponent } from './action-plans.component';

describe('ActionPlansComponent', () => {
  let component: ActionPlansComponent;
  let fixture: ComponentFixture<ActionPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionPlansComponent]
    });
    fixture = TestBed.createComponent(ActionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
