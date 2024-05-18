import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecontrolsComponent } from './changecontrols.component';

describe('ChangecontrolsComponent', () => {
  let component: ChangecontrolsComponent;
  let fixture: ComponentFixture<ChangecontrolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangecontrolsComponent]
    });
    fixture = TestBed.createComponent(ChangecontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
