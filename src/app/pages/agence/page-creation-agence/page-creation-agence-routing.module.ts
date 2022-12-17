import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreationAgenceComponent } from './page-creation-agence.component';

const routes: Routes = [{ path: '', component: PageCreationAgenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCreationAgenceRoutingModule { }
