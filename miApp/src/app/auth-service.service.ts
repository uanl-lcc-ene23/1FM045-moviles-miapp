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

  estaLoggeado: boolean = false;
  error: string;

  iniciarSesion(email: string, password: string){
    return this.afa.signInWithEmailAndPassword(email,password)
    .then((result)=> {
      console.log(result);
      this.afa.authState.subscribe((user) => {
        if (user) {
          console.log(user.uid) // `users/${user.uid}`
          this.estaLoggeado = true;
          this.ruta.navigate(['inicio']);
        }
      });
    })
    .catch((error)=> {
      this.estaLoggeado = false;
      this.error = error.message
    })
  }

  registro(email: string, password: string, nombre: string ){
    //return something here
  }
}
