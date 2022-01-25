import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../Services/firestore.service';
import { MecanicoAutomotriz, MecanicoElectrico } from './../Models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrico',
  templateUrl: './electrico.component.html',
  styleUrls: ['./electrico.component.scss'],
})
export class ElectricoComponent implements OnInit {

  mecanicoElectricos: MecanicoElectrico[]=[];

  newElectrico: MecanicoElectrico = {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null
  }  

  private path = 'Mecanico electrico/'

  constructor(public firestoreService: FirestoreService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getElectrico();
  }

  getElectrico(){
    this.firestoreService.getCollection<MecanicoElectrico>(this.path).subscribe(res => {
      this.mecanicoElectricos = res;
      
    })
  }

}
