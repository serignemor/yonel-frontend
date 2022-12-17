import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConnexionComponent } from './page-connexion.component';

const routes: Routes = [{ path: '', component: PageConnexionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageConnexionRoutingModule { }
