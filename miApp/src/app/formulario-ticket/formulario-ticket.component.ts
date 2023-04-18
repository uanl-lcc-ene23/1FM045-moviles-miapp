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
  
  
  @Output() monto: number = 0;

  @Output() descripcion: string = "";

  
  agregarAticket() {
   
  }
  
}
