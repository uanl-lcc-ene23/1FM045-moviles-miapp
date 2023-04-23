import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth, authState , user, User} from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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
    public afa: AngularFireAuth, 
    public ruta: Router) {
    
    this.authStateSubscription = this.authState$.subscribe((aUser: User | null) => {
      //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
   console.log(aUser, "usuario");
  });
  
  this.userSubscription = this.usuario$.subscribe((aUser: User | null) =>{
    console.log(aUser);
  });
    
  }
  ngOnInit(): void {
    
    this.esRegistro();
    this.paso = 1;
  }


  
  login: boolean = false; 

  usuario: string;
  password: string;

  modo: string;
  paso: number;

  error: string;

  iniciarSesion(email: string, password: string){
    return this.afa.signInWithEmailAndPassword(email,password)
    .then((result)=> {
      console.log(result);
      this.afa.authState.subscribe((user) => {
        if (user) {
          this.ruta.navigate(['perfil']);
        }
      });
    })
    .catch((error)=> {
      this.error = error.message
    })
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

  ngOnChanges(){
    console.log("cambios");
  }

  ngOnDestroy(){
    console.log("me destruiste");
  }

  

  siguientePaso(nuevoPaso : number){
    this.paso = nuevoPaso;
  }

  regresarPaso(pasoAnterior: number){
    this.paso = pasoAnterior;
  }
}
