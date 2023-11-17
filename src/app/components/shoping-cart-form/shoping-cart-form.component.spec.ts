import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartFormComponent } from './shoping-cart-form.component';

describe('ShopingCartFormComponent', () => {
  let component: ShopingCartFormComponent;
  let fixture: ComponentFixture<ShopingCartFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopingCartFormComponent]
    });
    fixture = TestBed.createComponent(ShopingCartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
