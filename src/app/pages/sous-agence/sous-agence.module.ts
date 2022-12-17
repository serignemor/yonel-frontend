import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SousAgenceRoutingModule } from './sous-agence-routing.module';
import { SousAgenceComponent } from './sous-agence.component';


@NgModule({
  declarations: [
    SousAgenceComponent
  ],
  imports: [
    CommonModule,
    SousAgenceRoutingModule
  ]
})
export class SousAgenceModule { }
