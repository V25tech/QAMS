import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McActivityComponent } from './mc-activity.component';

describe('McActivityComponent', () => {
  let component: McActivityComponent;
  let fixture: ComponentFixture<McActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McActivityComponent]
    });
    fixture = TestBed.createComponent(McActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
