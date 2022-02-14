import { AuthService } from './../Services/auth.service';
import { PedidoService } from './../Services/pedido.service';
import { EstadoPedido, Pedido, Useri } from './../Models/models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Services/firestore.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss'],
})
export class MisPedidosComponent implements OnInit {

  path ='/Solicitudes';
  usuario:Useri;

  solicitud: Pedido[];

  estados:EstadoPedido []= ['En espera', 'En camino', 'Entregado', 'enviado']

  constructor(public firestoreService:FirestoreService,
              public pedidoService:PedidoService,
              public auth: AuthService
    ) 
    { 
      this.auth.stateUser().subscribe(res=>{
        if (res){
          this.getDatosUser(res.uid)
          this.getSolicitudes(res.uid);
        }else {
        }
      }) 
    }

  ngOnInit() {}

  getSolicitudes(uid:string){
    const id = uid;
    this.firestoreService.getCollecction<Pedido>(this.path).subscribe(res => {
      console.log("getSolicitudes", res);
      if(res){
        this.solicitud = res;
      }
      })
  }

  getDatosUser(uid:string){
    const path = 'Usuarios';
    const id = uid;
    this.firestoreService.getDoc<Useri>(path, id).subscribe(res =>{
     // console.log('datosUsuario ->', res);
      if (res){
            this.usuario = res;
      }
    })
  } 

  cambiarEstado(pedido:Pedido, estado){
    console.log('cambiarEstado->', pedido);
    const path = 'Solicitudes'
    const updateDoc ={
      estado: estado.detail.value,
    };  
    const id = pedido.uid
    this.firestoreService.updateDoc(path, id, updateDoc).then(()=>{
      console.log('actualizado con exito');
    })
  }
}
