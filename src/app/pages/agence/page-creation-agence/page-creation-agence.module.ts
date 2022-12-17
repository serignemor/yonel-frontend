import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCreationAgenceRoutingModule } from './page-creation-agence-routing.module';
import { PageCreationAgenceComponent } from './page-creation-agence.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PageCreationAgenceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageCreationAgenceRoutingModule
  ]
})
export class PageCreationAgenceModule { }
