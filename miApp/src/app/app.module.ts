import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormularioTicketComponent } from './formulario-ticket/formulario-ticket.component';
import { TicketCompraComponent } from './ticket-compra/ticket-compra.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTicketComponent,
    TicketCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    IonicModule, IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
