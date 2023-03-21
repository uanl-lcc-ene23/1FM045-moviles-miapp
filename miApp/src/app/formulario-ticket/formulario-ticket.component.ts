import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-ticket',
  templateUrl: './formulario-ticket.component.html',
  styleUrls: ['./formulario-ticket.component.css']
})
export class FormularioTicketComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  total: number = 0;
  
  agregarAticket(): void{
    console.log("Ups!");
  }
  
  presentaAlerta() {
    alert("Alerta aqui")
  }
  
}
