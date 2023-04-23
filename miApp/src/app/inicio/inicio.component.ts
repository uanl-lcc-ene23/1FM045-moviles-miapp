import { Component, OnInit, inject } from '@angular/core';
import { Route } from '@angular/router';
import { Escuchados } from '../escuchados.model';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Playlist } from '../playlist.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private firestore: Firestore = inject(Firestore);
  escuchadosRecientemente$: Observable<Escuchados[]>;
  playlists$: Observable<Playlist[]>

  constructor() { 
    const escuchadosColleccion = collection(this.firestore, 'escuchados-recientemente');
    const playlistCollection = collection(this.firestore, 'playlists');

    this.escuchadosRecientemente$ = collectionData(escuchadosColleccion) as Observable<Escuchados[]>;
    this.playlists$ = collectionData(playlistCollection) as Observable<Playlist[]>;

  }

  ngOnInit(): void {
  }


}
