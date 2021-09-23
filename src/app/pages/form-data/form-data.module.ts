import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormDataComponent } from './views/form-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    FormDataComponent
  ],

  exports: [
    FormDataComponent
  ]
})

export class FormDataModule { }
