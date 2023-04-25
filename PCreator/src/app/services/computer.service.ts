import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Computer } from '../models/models/pc';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  collectionName = 'computer';

  constructor(private afs: AngularFirestore) { }

  create(pc: Computer) {
    return this.afs.collection<Computer>(this.collectionName).doc(pc.id).set(pc);
  }

  getAll() {
    return this.afs.collection<Computer>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Computer>(this.collectionName).doc(id).valueChanges();
  }

  update(pc: Computer) {
    return this.afs.collection<Computer>(this.collectionName).doc(pc.id).set(pc);
  }

  delete(id: string) {
    return this.afs.collection<Computer>(this.collectionName).doc(id).delete();
  }
}
