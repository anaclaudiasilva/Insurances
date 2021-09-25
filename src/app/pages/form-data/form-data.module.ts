import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormDataComponent } from './views/form-data.component';
import { CoverageProcessingComponent } from './views/coverage-processing/coverage-processing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    FormDataComponent,
    CoverageProcessingComponent
  ],

  exports: [
    FormDataComponent,
    CoverageProcessingComponent
  ]
})

export class FormDataModule { }
