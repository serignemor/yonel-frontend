import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenceRoutingModule } from './agence-routing.module';
import { AgenceComponent } from './agence.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AgenceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgenceRoutingModule
  ]
})
export class AgenceModule { }
