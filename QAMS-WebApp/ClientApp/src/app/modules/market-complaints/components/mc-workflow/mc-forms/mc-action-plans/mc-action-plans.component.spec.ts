import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McActionPlansComponent } from './mc-action-plans.component';

describe('McActionPlansComponent', () => {
  let component: McActionPlansComponent;
  let fixture: ComponentFixture<McActionPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McActionPlansComponent]
    });
    fixture = TestBed.createComponent(McActionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
