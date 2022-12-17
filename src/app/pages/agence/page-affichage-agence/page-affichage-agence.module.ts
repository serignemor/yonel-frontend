import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAffichageAgenceRoutingModule } from './page-affichage-agence-routing.module';
import { PageAffichageAgenceComponent } from './page-affichage-agence.component';


@NgModule({
  declarations: [
    PageAffichageAgenceComponent
  ],
  imports: [
    CommonModule,
    PageAffichageAgenceRoutingModule
  ]
})
export class PageAffichageAgenceModule { }
