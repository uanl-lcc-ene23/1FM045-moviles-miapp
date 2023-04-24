import { Component, OnInit , Output, inject} from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';

import { Genero
 } from '../genero.model';
import { FirebaseService } from '../firebase.service';
import { Cancion } from '../cancion.model';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  
  generos$: Observable<Genero[]>;

  resultadoBusqueda$: Observable<Cancion[]>;

  constructor(private firebase: FirebaseService) {

    const generosCollection = collection(this.firestore, 'generos');
    const cancionesCollection = collection(this.firestore, 'canciones');

    this.generos$ = collectionData(generosCollection) as Observable<Genero[]>;

   }
  

  @Output() resultados: any = [];

  ngOnInit(): void {
    console.log(this.generos$);
  }

  buscar(evento: any){
    this.firebase.GETCanciones(evento.target.value);


  }
}
