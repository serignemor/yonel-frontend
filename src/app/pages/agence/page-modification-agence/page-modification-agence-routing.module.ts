import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageModificationAgenceComponent } from './page-modification-agence.component';

const routes: Routes = [{ path: '', component: PageModificationAgenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageModificationAgenceRoutingModule { }
