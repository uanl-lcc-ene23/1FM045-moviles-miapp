import { Component, OnInit, OnChanges, DoCheck} from '@angular/core';
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

  loggedIn: boolean = false;
  ngOnInit(): void {
     if(this.sesionIniciada.estaLoggeado){
      this.loggedIn = true;
    }
    if(!this.sesionIniciada.estaLoggeado){
      this.loggedIn = false;
    }
  }


  ngDoCheck(){
    this.validaSesion();
  }



  validaSesion(){
    if(this.sesionIniciada.estaLoggeado){
      this.loggedIn = true;
    }
  }

}
