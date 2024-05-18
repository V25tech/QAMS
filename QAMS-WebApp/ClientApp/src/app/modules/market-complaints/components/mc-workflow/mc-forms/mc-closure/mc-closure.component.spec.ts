import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McClosureComponent } from './mc-closure.component';

describe('McClosureComponent', () => {
  let component: McClosureComponent;
  let fixture: ComponentFixture<McClosureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McClosureComponent]
    });
    fixture = TestBed.createComponent(McClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
