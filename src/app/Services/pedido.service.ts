import { Pedido, Useri, Servicio} from './../Models/models';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedido:Pedido;
  pedido$= new Subject<Pedido>();
  path = '/pedido';
  uid='';
  usuario:Useri;

  constructor(public auth:AuthService, public firestore:FirestoreService, public router: Router) {
    this.auth.stateUser().subscribe(res=>{
      if (res){
        this.uid= res.uid;
        this.loadPedido();
      }else {
        console.log("No estas logeado");
      }
    }) 
   }

  initPedido(){
  /*  this.pedido =  {
    uid: this.uid,
    usuario: this.usuario,
    servicio: [],
    estado:'En espera',
    fecha: new Date(),
    };
    this.pedido$.next(this.pedido);
    */
  }

  loadPedido(){
   /* const path ='Usuarios/'+this.uid+this.path;
    this.firestore.getDoc<Pedido>(path, this.uid).subscribe(res =>{
    //  console.log('En loadPedido',res);
      if (res){
        this.pedido=res;
        this.pedido$.next(this.pedido);
      }else{
        this.initPedido();
      }
    });*/
   }

  loadUsuario(){
     const path = 'Usuarios';
     this.firestore.getDoc<Useri>(path, this.uid).subscribe(res =>{
       this.usuario=res;
       this.loadPedido();
      })
  }

  getPedido():Observable<Pedido>{
   return this.pedido$.asObservable();
  }

  addServicio(servicio:Servicio){
  /*  if(this.uid.length){
      const item = this.pedido.servicio.find(servicioPedido =>{
        return (servicioPedido.servicio.id === servicio.id)
      });
      if (item){
        const add : ServicioPedido = {
          servicio: servicio,
        };
        this.pedido.servicio.push(add)
      }
    }else{
      this.router.navigate(['/login']);
      return;
    }
    console.log('En add pedido->', this.pedido);
    const path ='Usuarios/'+this.uid+this.path;
    this.firestore.createDoc1(this.pedido, path, this.pedido.uid).then(()=>{  
      console.log('añadido con exito');
      
    })*/
  }

  removePedido(servicio:Servicio){
  }

  realizarPedido(){
  }

  clearPedido(){
  }
}
