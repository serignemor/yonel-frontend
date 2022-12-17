import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCreationAgenceRoutingModule } from './page-creation-agence-routing.module';
import { PageCreationAgenceComponent } from './page-creation-agence.component';


@NgModule({
  declarations: [
    PageCreationAgenceComponent
  ],
  imports: [
    CommonModule,
    PageCreationAgenceRoutingModule
  ]
})
export class PageCreationAgenceModule { }
