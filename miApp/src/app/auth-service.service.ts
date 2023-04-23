import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    public afa: AngularFireAuth,
    public ruta: Router
  ) { }

  estaLoggeado: boolean;
  error: string;

  iniciarSesion(email: string, password: string){
    return this.afa.signInWithEmailAndPassword(email,password)
    .then((result)=> {
      console.log(result);
      this.afa.authState.subscribe((user) => {
        if (user) {
          this.estaLoggeado = true;
          this.ruta.navigate(['perfil']);
        }
      });
    })
    .catch((error)=> {
      this.error = error.message
    })
  }
}
