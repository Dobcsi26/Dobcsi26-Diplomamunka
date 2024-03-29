import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Computer } from '../models/models/pc';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  collectionName = 'computer';
  collectionNameStandard = 'userStandard';

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

  update(pc: Computer, progress: string) {
    console.log(progress)
    pc.stage = progress;
    return this.afs.collection<Computer>(this.collectionName).doc(pc.id).set(pc);
  }

  delete(id: string) {
    return this.afs.collection<Computer>(this.collectionName).doc(id).delete();
  }

  getPCbyStandardUserID(userID: string) {
    return this.afs.collection<Computer>(this.collectionName, ref => ref.where('userStandard', '==', userID)).valueChanges();
  }

  getPCbyWorkerUserID(userID: string) {
    return this.afs.collection<Computer>(this.collectionName, ref => ref.where('userWorker', '==', userID)).valueChanges();
  }
}
