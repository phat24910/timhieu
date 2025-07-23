import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiComponent } from './product-di.component';

describe('ProductDiComponent', () => {
  let component: ProductDiComponent;
  let fixture: ComponentFixture<ProductDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
