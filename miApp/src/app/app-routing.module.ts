import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { FormularioTicketComponent } from './formulario-ticket/formulario-ticket.component';

const routes: Routes = [ //rutas aqui
  {
    path: 'compras',
    component: ComprasComponent
  },
  {
    path: 'ticket',
    component: FormularioTicketComponent
  },
  {
    path: '',
    redirectTo: '/ticket',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  
 }
