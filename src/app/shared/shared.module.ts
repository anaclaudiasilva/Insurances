import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ModalQuoteInvalidComponent } from './components/modal-quote-invalid/modal-quote-invalid.component';
import { ModalDetailsComponent } from './components/modal-details/modal-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],

  declarations: [
    ModalQuoteInvalidComponent,
    ModalDetailsComponent,
  ],

  entryComponents: [
    ModalQuoteInvalidComponent,
    ModalDetailsComponent
  ],

  exports: [
    ModalQuoteInvalidComponent,
    ModalDetailsComponent
  ]
})
export class SharedModule { }
