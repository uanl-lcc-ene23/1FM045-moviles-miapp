import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ticket-compra',
  templateUrl: './ticket-compra.component.html',
  styleUrls: ['./ticket-compra.component.css']
})
export class TicketCompraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges() {
    console.log("cambio");
  }

 
  
  @Input() descripcion: string = ""; 
  @Input() monto: number= 0;

  total: number = 0;


  articulos: any = [];

  calculaTotal(){
  
  }

}
