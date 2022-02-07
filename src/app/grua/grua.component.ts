import { PedidoService } from './../Services/pedido.service';
import { Grua, Servicio } from './../Models/models';
import { FirestoreService } from './../Services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grua',
  templateUrl: './grua.component.html',
  styleUrls: ['./grua.component.scss'],
})
export class GruaComponent implements OnInit {

  @Input() servicio:Servicio;

  gruas: Grua[]=[];

newGrua: Grua = {
  Nombre:'',
  PrecioMinimo:'',
  Telefono:null
}  

private path = 'Grua/'

  constructor(public firestoreService: FirestoreService, private firestore: AngularFirestore, public pedidoService:PedidoService) { }

  ngOnInit() {
    this.getGrua();
  }

  getGrua(){
    this.firestoreService.getCollection<Grua>(this.path).subscribe(res => {
      this.gruas = res;
      
    })
  }

  addPedido(){
    this.pedidoService.addServicio(this.servicio);
   }
 
}

