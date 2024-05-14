import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRegComponent } from './equipment-reg.component';

describe('EquipmentRegComponent', () => {
  let component: EquipmentRegComponent;
  let fixture: ComponentFixture<EquipmentRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentRegComponent]
    });
    fixture = TestBed.createComponent(EquipmentRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
