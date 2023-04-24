import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [ //rutas aqui
  {
    path: 'inicio',
    component: InicioComponent, 
    canActivate: [AuthGuard]
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
    component: BuscarComponent, 
    canActivate: [AuthGuard]
  },
  
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'generos/:genero',
    component: BuscarComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'libreria',
    component: LibreriaComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'libreria/perfil', //TEMPORAL : Resolver error de ruta desde libreria
    redirectTo: '/perfil',
    pathMatch: 'full'
  },
  {
    path: 'registro/landing', //TEMPORAL : Resolver error de ruta desde libreria
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'playlist/:id',
    component: PlaylistComponent, 
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  
 }
