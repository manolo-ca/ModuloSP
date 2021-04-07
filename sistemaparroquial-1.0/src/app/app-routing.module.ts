import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { ModuloComponent } from './Inicio/modulo/modulo.component';

const routes: Routes = [

 {path: 'Inicio', 
  component: ModuloComponent,  
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});