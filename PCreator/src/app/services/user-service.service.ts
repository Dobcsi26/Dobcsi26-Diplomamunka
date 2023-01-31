import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  collectionNameSeeker = 'Job_seeker';
  collectionNameAdvertier = 'Job_offer';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  createSeeker(userS: user) {
    return this.afs.collection<user>(this.collectionNameSeeker).doc(userS.id).set(userS);
  }

}
