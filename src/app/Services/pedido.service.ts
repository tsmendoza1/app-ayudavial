import { AuthService } from './auth.service';
import { Pedido, Servicio, Useri } from './../Models/models';
import { Injectable } from '@angular/core';
import { FirestoreService } from 'app-ayudavial/src/app/Services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedido:Pedido;
  path = '/pedido';
  uid='';

  constructor(public auth:AuthService, public firestore:FirestoreService) {
    this.auth.stateUser().subscribe(res=>{
      if (res){
        this.uid= res.uid;
        this.loadPedido();
      }else {
        console.log("No estas logeado");

      }
    }) 
   }

  loadPedido(){
  //  const path ='Usuarios/'+this.uid+'/'+this.path;
   // this.firestore.getDoc<Pedido>(this.path, this.uid).subscribe(res =>{
    //  console.log(res);
     // if (res){
      //  this.pedido=res;
      //}else{
       // this.loadUsuario();
        
     // }
    //});
  }

  initPedido(){
   
  }

  loadUsuario(){
      const path = 'Usuarios';
    //  this.firestore.getDoc<Useri>(this.path, this.uid).subscribe(res =>{
      //  console.log('datos ->', res);
        //this.initPedido();
      //})
      
    
  }

  getPedido(){
    return this.pedido;
  }

  addServicio(servicio:Servicio){

  }

  removePedido(servicio:Servicio){

  }

  realizarPedido(){

  }

  clearPedido(){

  }
}
