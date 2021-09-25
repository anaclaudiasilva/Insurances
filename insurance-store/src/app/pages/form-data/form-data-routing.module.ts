import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverageProcessingComponent } from './views/coverage-processing/coverage-processing.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'processando',
        component: CoverageProcessingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDataRoutingModule { }
