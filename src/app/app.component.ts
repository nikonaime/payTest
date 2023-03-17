import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PaymentPopupComponentComponent } from './payment-popup-component/payment-popup-component.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  amount: number | undefined;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private modalService: NgbModal
  ) {}

  makeFetchRequest(): void {
    const url = 'https://payze.io/api/v1';
    const body = {
      method: 'justPay',
      apiKey: '29BA849806FA4938A5EC0BD405F2AA03',
      apiSecret: '5C8D6872A1FD4FE09C0E4BAA94C3CF2A',
      data: {
        amount: this.amount,
        currency: 'USD',
        callback: 'https://corp.com/success_callback',
        callbackError: 'https://corp.com/fail_url',
        preauthorize: false,
        lang: 'EN',
        hookUrl: 'https://corp.com/payze_hook?authorization_token=token',
        hookRefund: false,
      },
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const options = { headers: headers };

    this.http.post(url, body, options).subscribe(
      (response: any) => {
        console.log(response.response.transactionUrl);
        this.openPaymentPage(response.response['transactionUrl']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openPaymentPage(url: string) {
    const modalRef = this.modalService.open(PaymentDialogComponent);
    modalRef.componentInstance.paymentLink = url;
  }
}
