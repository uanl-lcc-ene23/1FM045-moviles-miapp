import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    public afa: AngularFireAuth,
    public ruta: Router, 
    public afs: AngularFirestore
  ) { }

  estaLoggeado: boolean = false;
  error: string;
  datosUsuario: any; //Sesion de usuario TBC
  mensaje: string;

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
    return this.afa.createUserWithEmailAndPassword(email, password)
    .then((result)=> {
      this.agregarUsuarioBD(result.user, nombre);
      this.enviarCodigoVerificacion();
    })
    .catch((error)=> {
      this.error = error;
    })
  }

  enviarCodigoVerificacion(){
    return this.afa.currentUser
    .then((u:any)=> u.sendEmailVerification())
    .then(()=> {
      this.mensaje = 'Por favor revisa tu correo. Te enviamos un link de verificación :)';
    })
    .catch((error)=> {
      this.error = error;
    })
  }
  agregarUsuarioBD(usuario: any, nombre: string){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `usuarios/${usuario.uid}`
    );
    const userData: Usuario = {
      uid: usuario.uid,
      email: usuario.email,
      nombre: nombre,
      fotoURL: usuario.photoURL,
      correoVerificado: usuario.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
}
