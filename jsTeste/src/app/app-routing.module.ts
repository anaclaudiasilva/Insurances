import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageProcessingComponent } from './pages/form-data/views/coverage-processing/coverage-processing.component';

const routes: Routes = [
  {
    path: 'quiz',
    loadChildren: () => import('../app/pages/quiz/quiz.module').then(m => m.QuizModule),
  },
  {
    path: 'processando',
    component: CoverageProcessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
