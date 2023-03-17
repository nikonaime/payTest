import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-payment-popup-component',
  templateUrl: './payment-popup-component.component.html',
  styleUrls: ['./payment-popup-component.component.scss'],
})
export class PaymentPopupComponentComponent {
  paymentLink =
    'https://payze.io/api/redirect/transaction/5DFDA700106D41229DBD7CFDAD1135E4';

  constructor(private modalService: NgbModal) {}

  openPaymentPage() {
    const modalRef = this.modalService.open(PaymentDialogComponent);
    modalRef.componentInstance.paymentLink = this.paymentLink;
  }
}
