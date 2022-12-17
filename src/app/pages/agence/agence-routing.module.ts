import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenceComponent } from './agence.component';

const routes: Routes = [
  { path: '', component: AgenceComponent },
  { path: 'create', loadChildren: () => import('./page-creation-agence/page-creation-agence.module').then(m => m.PageCreationAgenceModule) },
  { path: ':id', loadChildren: () => import('./page-affichage-agence/page-affichage-agence.module').then(m => m.PageAffichageAgenceModule) },
  { path: ':id/modification', loadChildren: () => import('./page-modification-agence/page-modification-agence.module').then(m => m.PageModificationAgenceModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenceRoutingModule { }
