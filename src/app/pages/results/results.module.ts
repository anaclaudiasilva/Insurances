import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultCoverageComponent } from './views/result-coverage/result-coverage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    ResultCoverageComponent
  ],

  exports: [
    ResultCoverageComponent
  ]
})

export class ResultsModule { }
