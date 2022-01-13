import { Grua } from './../Models/models';
import { FirestoreService } from './../Services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grua',
  templateUrl: './grua.component.html',
  styleUrls: ['./grua.component.scss'],
})
export class GruaComponent implements OnInit {

  gruas: Grua[]=[];

newGrua: Grua = {
  Nombre:'',
  PrecioMinimo:'',
  Telefono:null
}  

private path = 'grua/'

  constructor(public firestoreService: FirestoreService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getGrua();
  }

  getGrua(){
    this.firestoreService.getServiciosT<Grua>(this.path).subscribe(res => {
      this.gruas = res;
      
    })
  }
 
}

