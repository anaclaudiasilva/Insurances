import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ModalQuoteInvalidComponent } from './components/modal-quote-invalid/modal-quote-invalid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],

  declarations: [
    ModalQuoteInvalidComponent
  ],

  entryComponents: [
    ModalQuoteInvalidComponent
  ]
})
export class SharedModule { }
