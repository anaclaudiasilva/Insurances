import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizFormComponent } from './views/quiz-form/quiz-form.component';
import { QuizService } from './services/quiz.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    QuizFormComponent
  ],

  exports: [
    QuizFormComponent
  ],

  providers: [
    QuizService
  ]
})

export class QuizModule { }
