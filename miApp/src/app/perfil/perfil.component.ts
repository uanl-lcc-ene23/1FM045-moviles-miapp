import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Playlist } from '../playlist.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private firestore: Firestore = inject(Firestore);
  playlists$ : Observable<Playlist[]>;

  constructor() { 
    const playlistCollection = collection(this.firestore, '/playlists');

    this.playlists$ = collectionData(playlistCollection) as Observable<Playlist[]>;
  }

  ngOnInit(): void {
  }

}
