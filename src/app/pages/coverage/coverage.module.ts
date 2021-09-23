import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoverageComponent } from './views/coverage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    CoverageComponent
  ],

  exports: [
    CoverageComponent
  ]
})

export class CoverageModule { }
