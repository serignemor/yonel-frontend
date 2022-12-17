import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAffichageAgenceRoutingModule } from './page-affichage-agence-routing.module';
import { PageAffichageAgenceComponent } from './page-affichage-agence.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PageAffichageAgenceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageAffichageAgenceRoutingModule
  ]
})
export class PageAffichageAgenceModule { }
