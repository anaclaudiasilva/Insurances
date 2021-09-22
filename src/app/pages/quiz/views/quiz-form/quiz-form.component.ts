import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalQuoteInvalidComponent } from 'src/app/shared/components/modal-quote-invalid/modal-quote-invalid.component';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})

export class QuizFormComponent {

  constructor(
    private modal$: BsModalService
  ) { }

  public callQuoteModal(): void {
    this.modal$.show(ModalQuoteInvalidComponent, {
      class: 'modal-md',
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
}
