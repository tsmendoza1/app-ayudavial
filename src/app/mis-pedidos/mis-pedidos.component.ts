import { PedidoService } from './../Services/pedido.service';
import { Pedido } from './../Models/models';
import { FirestoreService } from 'app-ayudavial/src/app/Services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss'],
})
export class MisPedidosComponent implements OnInit {

  pedido:Pedido;

  constructor(public firestoreService:FirestoreService,
              public pedidoService:PedidoService,
    ) { 
    this.initPedido();
    this.loadpedido();
  }

  ngOnInit() {}

  loadpedido(){
   this.pedidoService.getPedido().subscribe(res=>{
     this.pedido = res;
   })
  }

  initPedido(){
    this.pedido =  {
    uid: '',
    usuario:null,
    servicios: null,
    estado:'enviado',
    fecha: new Date(),
    };
  }
}
