import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {

  constructor() { }

  @Input() resultados: any = [];

  ngOnInit(): void {
  }

}
