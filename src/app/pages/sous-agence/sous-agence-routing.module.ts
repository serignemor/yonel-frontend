import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SousAgenceComponent } from './sous-agence.component';

const routes: Routes = [
  { path: '', component: SousAgenceComponent },
  { path: 'create', loadChildren: () => import('./page-creation-sous-agence/page-creation-sous-agence.module').then(m => m.PageCreationSousAgenceModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SousAgenceRoutingModule { }
