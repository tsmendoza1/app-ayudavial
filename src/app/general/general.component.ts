import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../Services/firestore.service';
import { MecanicoGeneral } from './../Models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  mecanicoGenerals: MecanicoGeneral []=[];

  newGeneral: MecanicoGeneral = {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null
  }  
  
  private path = 'Mecanico general/'

  constructor(public firestoreService: FirestoreService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getGeneral();
  }

  getGeneral(){
    this.firestoreService.getCollection<MecanicoGeneral>(this.path).subscribe(res => {
      this.mecanicoGenerals = res;
      
    })
  }

}
