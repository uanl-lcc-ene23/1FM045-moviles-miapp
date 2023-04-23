import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auth, authState , user, User} from '@angular/fire/auth';
import { Subscription } from 'rxjs';


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

  constructor(private rutaActiva: ActivatedRoute) {
    
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
  }
  
  login: boolean = false; 

  iniciarSesion(){
    
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
}
