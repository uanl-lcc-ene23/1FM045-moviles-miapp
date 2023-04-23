import { Component, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor() { }

  @Output() resultados: any = [];

  ngOnInit(): void {
  }

  buscar(evento: any){

  }
}
