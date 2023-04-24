import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, where , query, getDocs} from '@angular/fire/firestore';
import { Database } from '@angular/fire/database';
import { AngularFirestore , AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Playlist } from './playlist.model';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public firestore: Firestore,
    public afs: AngularFirestore
  ) { }

  POSTPlaylist(nombre: string){
    const playlistRef: AngularFirestoreDocument<any> = this.afs.collection('playlists').doc();
    const playlist: Playlist = {
      nombre: nombre,
      canciones: []
    };

    return playlistRef.set(playlist, {
      merge: true,
    });
  }

  GETCanciones(busquedaStr: string){
    const busquedaCancionesCollecion = collection(this.firestore, 'canciones');
    let q = query(busquedaCancionesCollecion, where('canciones', '>', busquedaStr));

    
    
    const querySnapshot =  getDocs(q)
    .then((doc)=> {
      console.log(doc);
    })
  }
}
