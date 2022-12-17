import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SousAgenceComponent } from './sous-agence.component';

const routes: Routes = [{ path: '', component: SousAgenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SousAgenceRoutingModule { }
