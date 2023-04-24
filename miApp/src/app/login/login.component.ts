import { Component, OnInit, inject, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth, authState , user, User} from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private auth: Auth = inject(Auth);
  usuario$ =  user(this.auth); 
  authState$ = authState(this.auth);
  userSubscription: Subscription;
  authStateSubscription : Subscription;

  constructor(private rutaActiva: ActivatedRoute, 
    public afs: AngularFirestore,
    public authS: AuthServiceService) {
    
  }
  ngOnInit(): void {
    
    this.esRegistro();
    this.paso = 1;
  }


  
  login: boolean = false; 

  //datos login
  usuario: string;
  password: string;
  //datos registro
  emailNuevoUsuario: string;
  passwordNuevoUsuario: string;
  nombreNuevoUsuario: string;

  modo: string;
  paso: number;

  mensajeUsuario: string;

  iniciarSesion(email: string, password: string){
    this.authS.iniciarSesion(email, password);
  }

  ngDoCheck(){
    if(this.authS.error){
      this.mensajeUsuario = this.authS.error;
    }

    if(this.authS.mensaje){
      this.mensajeUsuario = this.authS.mensaje;
    }
  }
  
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

  crearCuenta(correo: string, password:string, nombre: string){
    this.authS.registro(correo, password, nombre);
  }
  siguientePaso(nuevoPaso : number){
    this.paso = nuevoPaso;
  }

  regresarPaso(pasoAnterior: number){
    this.paso = pasoAnterior;
  }
}
