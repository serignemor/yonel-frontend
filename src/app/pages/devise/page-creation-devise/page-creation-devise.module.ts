import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCreationDeviseRoutingModule } from './page-creation-devise-routing.module';
import { PageCreationDeviseComponent } from './page-creation-devise.component';


@NgModule({
  declarations: [
    PageCreationDeviseComponent
  ],
  imports: [
    CommonModule,
    PageCreationDeviseRoutingModule
  ]
})
export class PageCreationDeviseModule { }
