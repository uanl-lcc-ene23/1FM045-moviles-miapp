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
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    IonicModule, IonicModule.forRoot(),
    //provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    //provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig)
    //AngularFireStorageModule,
    //AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
