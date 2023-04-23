import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { FormularioTicketComponent } from './formulario-ticket/formulario-ticket.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [ //rutas aqui
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'cuenta/:login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'buscar',
    component: BuscarComponent
  },
  {
    path: 'generos/:genero',
    component: BuscarComponent
  },
  {
    path: 'libreria',
    component: LibreriaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'libreria/perfil', //TEMPORAL : Resolver error de ruta desde libreria
    redirectTo: '/perfil',
    pathMatch: 'full'
  },
  {
    path: 'playlist/:id',
    component: PlaylistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  
 }
