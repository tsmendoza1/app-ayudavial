import { PedidoService } from './../Services/pedido.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../Services/firestore.service';
import { MecanicoAutomotriz, Servicio } from './../Models/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-automotriz',
  templateUrl: './automotriz.component.html',
  styleUrls: ['./automotriz.component.scss'],
})
export class AutomotrizComponent implements OnInit {

  @Input() servicio:Servicio;

  mecanicoAutomotrizs: MecanicoAutomotriz[]=[];

  newMecanico:MecanicoAutomotriz= {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null 
  }

  private path = 'Mecanico automotriz/'

  constructor(public firestoreService: FirestoreService, private firestore: AngularFirestore, public pedidoService:PedidoService) { }

  ngOnInit() {
    this.getMecanicoA();
  }

  getMecanicoA(){
    this.firestoreService.getCollection<MecanicoAutomotriz>(this.path).subscribe(res => {
      console.log("res", res);
      this.mecanicoAutomotrizs = res;
    })
  }

  addPedido(){
   this.pedidoService.addServicio(this.servicio);
  }

}
