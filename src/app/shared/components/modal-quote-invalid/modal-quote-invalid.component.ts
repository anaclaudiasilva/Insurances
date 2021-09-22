import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-quote-invalid',
  templateUrl: './modal-quote-invalid.component.html',
  styleUrls: ['./modal-quote-invalid.component.scss']
})

export class ModalQuoteInvalidComponent {

  constructor(
    private modal: BsModalRef
  ) { }

  public close(): void {
    this.modal.hide();
  }
}
