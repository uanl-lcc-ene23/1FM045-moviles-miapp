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
    this.agregaAticket(this.nuevaCompra);
  }


  @Input() nuevaCompra: any = {
    monto: 0,
    descripcion: ''
  }

  total: number = 0;


  articulos: any = [];

  agregaAticket(compra: any){
    this.articulos.push(compra);
    
    this.calculaTotal(compra.monto);
  }

  calculaTotal(monto: number){
    this.total = this.total + monto;
  }

}
