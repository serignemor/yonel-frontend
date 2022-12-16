import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenceRoutingModule } from './agence-routing.module';
import { AgenceComponent } from './agence.component';


@NgModule({
  declarations: [
    AgenceComponent
  ],
  imports: [
    CommonModule,
    AgenceRoutingModule
  ]
})
export class AgenceModule { }
