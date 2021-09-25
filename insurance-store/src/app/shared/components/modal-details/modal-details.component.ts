import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})

export class ModalDetailsComponent {
  public image: any;
  public nome: string;
  public descricao: string;

  constructor(
    private modal: BsModalRef
  ) { }

  public close(): void {
    this.modal.hide();
  }
}
