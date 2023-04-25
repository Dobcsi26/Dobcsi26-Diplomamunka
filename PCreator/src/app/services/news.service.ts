import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { News } from '../models/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  collectionName = "news";

  constructor(private afs: AngularFirestore) { }

  getAllNews() {
    return this.afs.collection<News>(this.collectionName).valueChanges();
  }
}
