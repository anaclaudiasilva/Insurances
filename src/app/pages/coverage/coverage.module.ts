import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoverageComponent } from './views/coverage.component';
import { CoverageService } from './services/coverage.service';

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
  ],

  providers: [
    CoverageService
  ]
})

export class CoverageModule { }
