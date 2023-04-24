import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Playlist } from '../playlist.model';
import { FirebaseService } from '../firebase.service';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  private firestore: Firestore = inject(Firestore);

  playlists$: Observable<Playlist[]>;

  constructor(
    private firebase: FirebaseService, 
    private modal : ModalController
  ) { 
    const playlistsCollection = collection(this.firestore, 'playlists');

    this.playlists$ = collectionData(playlistsCollection) as Observable<Playlist[]>;
  }

  ngOnInit(): void {
  }

  nombrePlaylist: string;

  crearPlaylist(nombre: string){
    this.firebase.POSTPlaylist(nombre);

    this.cerrarModal();
  }

  cerrarModal(){
    this.modal.dismiss();
  }

}
