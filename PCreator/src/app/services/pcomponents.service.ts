import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CPU } from '../models/models/pc_components/cpu';
import { GPU } from '../models/models/pc_components/gpu';
import { HDD } from '../models/models/pc_components/hdd';
import { MB } from '../models/models/pc_components/mb';
import { PC_case } from '../models/models/pc_components/pc_case';
import { PSU } from '../models/models/pc_components/psu';
import { RAM } from '../models/models/pc_components/ram';
import { SSD } from '../models/models/pc_components/ssd';

@Injectable({
  providedIn: 'root'
})
export class PcomponentsService {

  collectionNameCPU = "CPU";
  collectionNameGPU = "GPU";
  collectionNameHDD = "HDD";
  collectionNameMB = "MB";
  collectionNamePC_case = "PC_case";
  collectionNamePSU = "PSU";
  collectionNameRAM = "RAM";
  collectionNameSSD = "SSD";


  constructor(private afs: AngularFirestore) { }

  getAllCPU() {
    return this.afs.collection<CPU>(this.collectionNameCPU).valueChanges();
  }

  getAllGPU() {
    return this.afs.collection<GPU>(this.collectionNameGPU).valueChanges();
  }

  getAllHDD() {
    return this.afs.collection<HDD>(this.collectionNameHDD).valueChanges();
  }

  getAllMB() {
    return this.afs.collection<MB>(this.collectionNameMB).valueChanges();
  }

  getAllPC_case() {
    return this.afs.collection<PC_case>(this.collectionNamePC_case).valueChanges();
  }

  getAllPSU() {
    return this.afs.collection<PSU>(this.collectionNamePSU).valueChanges();
  }

  getAllRAM() {
    return this.afs.collection<RAM>(this.collectionNameRAM).valueChanges();
  }

  getAllSSD() {
    return this.afs.collection<SSD>(this.collectionNameSSD).valueChanges();
  }

  getCPUById(id: string) {
    return this.afs.collection<CPU>(this.collectionNameCPU).doc(id).valueChanges();
  }
}
