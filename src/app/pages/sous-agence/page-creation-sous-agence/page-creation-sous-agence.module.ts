import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCreationSousAgenceRoutingModule } from './page-creation-sous-agence-routing.module';
import { PageCreationSousAgenceComponent } from './page-creation-sous-agence.component';


@NgModule({
  declarations: [
    PageCreationSousAgenceComponent
  ],
  imports: [
    CommonModule,
    PageCreationSousAgenceRoutingModule
  ]
})
export class PageCreationSousAgenceModule { }
