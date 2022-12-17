import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageConnexionRoutingModule } from './page-connexion-routing.module';
import { PageConnexionComponent } from './page-connexion.component';
import {SharedModule} from "../../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    PageConnexionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageConnexionRoutingModule,
    MatCardModule
  ]
})
export class PageConnexionModule { }
