import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

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
  ]
})

export class QuizModule { }
