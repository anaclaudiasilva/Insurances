import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverageModule } from './pages/coverage/coverage.module';
import { FormDataModule } from './pages/form-data/form-data.module';
import { HomeModule } from './pages/home/home.module';
import { QuizModule } from './pages/quiz/quiz.module';
import { ResultsModule } from './pages/results/results.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    QuizModule,
    ModalModule.forRoot(),
    CoverageModule,
    FormDataModule,
    ResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
