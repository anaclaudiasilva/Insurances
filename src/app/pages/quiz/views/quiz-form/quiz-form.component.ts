import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalQuoteInvalidComponent } from 'src/app/shared/components/modal-quote-invalid/modal-quote-invalid.component';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})

export class QuizFormComponent implements OnInit{

  public questions: Array<any> = [];
  public anwsers: Array<any> = [];
  public noCompleteAnwsers = true;

  public clicked = false;

  constructor(
    private modal$: BsModalService,
    public quiz$: QuizService
  ) { }

  ngOnInit() {
    this.callQuizService();
  }

  public callQuizService() {
    this.quiz$.getQuestion().subscribe(res => {
      this.questions = res;
    });
  }

  public callQuoteModal() {
    this.modal$.show(ModalQuoteInvalidComponent, {
      class: 'modal-md',
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
}
