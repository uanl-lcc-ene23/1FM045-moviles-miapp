import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    this.esRegistro();
  }

  login: boolean = false; 

  esRegistro(){
    let parametroRuta = this.rutaActiva.snapshot.params['login'];

    if(parametroRuta == 'login'){
      this.login = true;
      return;
    } else {
      this.login = false;
      return;
    }
  }
}
