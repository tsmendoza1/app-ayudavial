import { AuthService } from './../Services/auth.service';
import { AutomotrizComponent } from './../automotriz/automotriz.component';

import { PedidoService } from './../Services/pedido.service';
import { Pedido, Useri } from './../Models/models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Services/firestore.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss'],
})
export class MisPedidosComponent implements OnInit {

  pedido:Pedido;
  path ='/Solicitudes';
  usuario:Useri;

  solicitudes: Pedido;

  newSolicitud:Pedido= {
    uid: '',
    usuario:null,
    servicio: null,
    estado:'En espera',
    fecha: new Date(),
  }

  constructor(public firestoreService:FirestoreService,
              public pedidoService:PedidoService,
              public auth: AuthService
              
    ) { 

      this.auth.stateUser().subscribe(res=>{
        if (res){
          this.getDatosUser(res.uid)
        }else {
        }
      }) 

    this.initPedido();
    this.loadpedido();
  }

  ngOnInit() {
    this.getSolicitudes();
  }

  loadpedido(){
   this.pedidoService.getPedido().subscribe(res=>{
     this.pedido = res;
   })
  }

  initPedido(){
    this.pedido =  {
    uid: '',
    usuario:null,
    servicio: null,
    estado:'enviado',
    fecha: new Date(),
    };
  }

  getSolicitudes(){
    this.firestoreService.getDoc<Pedido>(this.path, this.pedido.uid).subscribe(res => {
      console.log("res", res);
      this.solicitudes = res;
      })
  }

  getDatosUser(uid:string){
    const path = 'Usuarios';
    const id = uid;
    this.firestoreService.getDoc<Useri>(path, id).subscribe(res =>{
      console.log('datos ->', res);
      if (res){
            this.usuario = res;
      }
    })
    
  }
}
