import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageModificationAgenceRoutingModule } from './page-modification-agence-routing.module';
import { PageModificationAgenceComponent } from './page-modification-agence.component';


@NgModule({
  declarations: [
    PageModificationAgenceComponent
  ],
  imports: [
    CommonModule,
    PageModificationAgenceRoutingModule
  ]
})
export class PageModificationAgenceModule { }
