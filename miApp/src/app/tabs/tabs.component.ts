import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(
    private sesionIniciada: AuthServiceService
  ) { }

  estaLoggeado: boolean;
  ngOnInit(): void {
    if(this.sesionIniciada.estaLoggeado){
      this.estaLoggeado = true;
    }
    if(!this.sesionIniciada.estaLoggeado){
      this.estaLoggeado = false;
    }
  }

}
