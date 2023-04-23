import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Database, objectVal, ref, getDatabase, set, get, onValue, onChildAdded} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public database: Database,
    public firestore: Firestore
  ) { }
}
