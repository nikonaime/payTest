import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPopupComponentComponent } from './payment-popup-component.component';

describe('PaymentPopupComponentComponent', () => {
  let component: PaymentPopupComponentComponent;
  let fixture: ComponentFixture<PaymentPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPopupComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
