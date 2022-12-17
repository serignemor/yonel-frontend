import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreationSousAgenceComponent } from './page-creation-sous-agence.component';

const routes: Routes = [{ path: '', component: PageCreationSousAgenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCreationSousAgenceRoutingModule { }
