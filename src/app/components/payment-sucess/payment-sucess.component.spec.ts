import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSucessComponent } from './payment-sucess.component';

describe('PaymentSucessComponent', () => {
  let component: PaymentSucessComponent;
  let fixture: ComponentFixture<PaymentSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSucessComponent]
    });
    fixture = TestBed.createComponent(PaymentSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
