import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  { 
    path: 'tabla', 
    component: TablaComponent 
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: '',
    redirectTo: '/tabla',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tabla',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
