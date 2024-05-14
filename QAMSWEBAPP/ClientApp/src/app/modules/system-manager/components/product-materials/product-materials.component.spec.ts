import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMaterialsComponent } from './product-materials.component';

describe('ProductMaterialsComponent', () => {
  let component: ProductMaterialsComponent;
  let fixture: ComponentFixture<ProductMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMaterialsComponent]
    });
    fixture = TestBed.createComponent(ProductMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
