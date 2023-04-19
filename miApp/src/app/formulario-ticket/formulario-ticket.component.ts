import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-ticket',
  templateUrl: './formulario-ticket.component.html',
  styleUrls: ['./formulario-ticket.component.css']
})
export class FormularioTicketComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  
  monto: number = 0;

  descripcion: string = "";

  @Output() nuevaCompra: any = {
    monto: 0,
    descripcion: ''
  }

  
  agregarAticket() {
   this.nuevaCompra = {
    monto: this.monto,
    descripcion: this.descripcion
   }

   this.limpiaCamposTexto();
   
  }

  limpiaCamposTexto(){
    this.monto = 0;
    this.descripcion = '';
   }
  
}
