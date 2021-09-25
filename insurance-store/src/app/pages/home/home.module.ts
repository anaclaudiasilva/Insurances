import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './views/banner/banner.component';
import { InformationPortoComponent } from './views/information-porto/information-porto.component';
import { SubItensComponent } from './views/subitens/subitens.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    BannerComponent,
    InformationPortoComponent,
    SubItensComponent
  ],

  exports: [
    BannerComponent,
    InformationPortoComponent,
    SubItensComponent
  ]
})

export class HomeModule { }
