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
  
  @Output() total: number = 0;
  monto: number = 0;
  articulo: string = "";

  @Output() mensaje: string = "HOLA,MUNDO";
  
  agregarAticket(): void{
   //Calcular Total aqui
  }
  
  presentaAlerta() {
   
  }
  
}
