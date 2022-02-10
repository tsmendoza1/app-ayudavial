import { PedidoService } from './../Services/pedido.service';
import { Grua, Servicio, MecanicoGeneral, Pedido, Useri } from './../Models/models';
import { FirestoreService } from './../Services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { InteractionService } from '../Services/interaction.service';

@Component({
  selector: 'app-grua',
  templateUrl: './grua.component.html',
  styleUrls: ['./grua.component.scss'],
})
export class GruaComponent implements OnInit {

  @Input() servicio:Servicio;

  user:Useri;

  gruas: Grua[]=[];

newGrua: Grua = {
  Nombre:'',
  PrecioMinimo:'',
  Telefono:null
}  

private path = 'Grua/'

  constructor(public firestoreService: FirestoreService, 
    private firestore: AngularFirestore, 
    public pedidoService:PedidoService,
    public auth:AuthService,
    private interaction: InteractionService,) {
      this.auth.stateUser().subscribe(res=>{
        if (res){
          this.loadUser(res.uid)
        }else {
          
        }
      })
     }

  ngOnInit() {
    this.getGrua();
  }

  getGrua(){
    this.firestoreService.getCollection<Grua>(this.path).subscribe(res => {
      this.gruas = res;
      
    })
  }
 
  solicitarServicio(servicio: Grua) {
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
      }
    })
      // va a traer la informacion del usuario y guarda en la variable this.user
  }

}

