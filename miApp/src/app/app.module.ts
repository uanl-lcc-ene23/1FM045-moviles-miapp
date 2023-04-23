import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormularioTicketComponent } from './formulario-ticket/formulario-ticket.component';
import { TicketCompraComponent } from './ticket-compra/ticket-compra.component';
import { FormsModule } from '@angular/forms';

//Firebase
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

//importar firebaseconfig
import {environment} from '../environments/environment.prod';
import { ComprasComponent } from './compras/compras.component';
import { TabsComponent } from './tabs/tabs.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { CambiarFotoComponent } from './cambiar-foto/cambiar-foto.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { MusicaActivaComponent } from './musica-activa/musica-activa.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTicketComponent,
    TicketCompraComponent,
    ComprasComponent,
    TabsComponent,
    InicioComponent,
    LoginComponent,
    PerfilComponent,
    BuscarComponent,
    LibreriaComponent,
    CambiarFotoComponent,
    PlaylistComponent,
    ResultadosBusquedaComponent,
    MusicaActivaComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    IonicModule, IonicModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    provideFirestore(()=> getFirestore()),  //Acceso a Firestore DB
    provideAuth(()=> getAuth()) //Acceso a Firebase Authentication
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
