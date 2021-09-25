import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizFormComponent } from './views/quiz-form/quiz-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'quiz',
        component: QuizFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
