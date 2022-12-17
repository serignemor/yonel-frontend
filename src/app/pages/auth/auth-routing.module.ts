import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {PageConnexionComponent} from "./page-connexion/page-connexion.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./page-connexion/page-connexion.module').then(m => m.PageConnexionModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
