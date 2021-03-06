import { PedidoService } from './../Services/pedido.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../Services/firestore.service';
import { MecanicoElectrico, Servicio, Useri, Pedido } from './../Models/models';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { InteractionService } from '../Services/interaction.service';

@Component({
  selector: 'app-electrico',
  templateUrl: './electrico.component.html',
  styleUrls: ['./electrico.component.scss'],
})
export class ElectricoComponent implements OnInit {

  user:Useri;
  rol:'visitante'|'admin'= null;

  mecanicoElectricos: MecanicoElectrico[]=[];

  newElectrico: MecanicoElectrico = {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null,
    id:'',
  }  

  private path = 'Mecanico electrico/'

  constructor(public firestoreService: FirestoreService,
            public auth: AuthService, 
            private firestore: AngularFirestore, 
            public pedidoService:PedidoService,
            public interaction:InteractionService
            ) { 

              this.auth.stateUser().subscribe(res=>{
                if (res){
                  this.loadUser(res.uid)
                }else {
                }
              })
            }

  ngOnInit() {
    this.getElectrico();
  }

  getElectrico(){
    this.firestoreService.getCollection<MecanicoElectrico>(this.path).subscribe(res => {
      this.mecanicoElectricos = res;
      
    })
  }

  solicitarServicio(servicio: MecanicoElectrico) {
    console.log(servicio, this.user);
    const path = 'Solicitudes/' 
    const pedido: Pedido = {
        servicio: servicio,
        fecha: new Date(),
        uid: this.user.uid,
        usuario: this.user,
        estado: 'En espera' 
    }
    console.log('pedido-->', pedido);
    this.firestoreService.createDoc1(pedido, path,pedido.uid);
    this.interaction.presentToast(pedido.estado)
  }

   loadUser(uid:string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestoreService.getDoc<Useri>(path, id).subscribe(res =>{
     console.log('datosUser ->', res);
      if (res){
       this.user=res;
       this.rol= res.perfil;
      }
    })
  }

  editar(mecanicoElectrico:MecanicoElectrico){
    console.log('editar->', mecanicoElectrico);
    this.newElectrico = mecanicoElectrico;
   }
 
   async guardar(){
     await this.interaction.presentLoading('Guardando...');
     console.log('Guardar->', this.newElectrico);
     const path = 'Mecanico electrico';
     await this.firestoreService.createDoc1(this.newElectrico, path, this.newElectrico.id)
     this.interaction.closeloading();
   }

}
