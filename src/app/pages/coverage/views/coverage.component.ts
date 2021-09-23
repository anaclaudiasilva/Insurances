import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalDetailsComponent } from 'src/app/shared/components/modal-details/modal-details.component';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})

export class CoverageComponent {

  constructor(
    private modal$: BsModalService
  ) { }

  public callModalDetails(): void {
    this.modal$.show(ModalDetailsComponent, {
      class: 'modal-md',
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true,
      initialState: {
        image: 'https://itau-mkt-place-seguros.s3-sa-east-1.amazonaws.com/images/residencial/ilustracoes/pagaluguel.svg',
        nome: 'Danos Elétricos',
        descricao: 'A geladeira queimou depois de um curto circuito? Você está protegido de danos provocados nas instalações e nos aparelhos elétricos por conta de uma descarga elétrica ou variações anormais de tensão, por exemplo.',
      }
    });
  }
}
