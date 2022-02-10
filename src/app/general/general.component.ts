import { PedidoService } from './../Services/pedido.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../Services/firestore.service';
import { MecanicoGeneral, Servicio, Useri, Pedido } from './../Models/models';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { InteractionService } from '../Services/interaction.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  @Input() servicio:Servicio;

  user:Useri;

  mecanicoGenerals: MecanicoGeneral []=[];

  newGeneral: MecanicoGeneral = {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null
  }  
  
  private path = 'Mecanico general/'

  constructor(public firestoreService: FirestoreService, 
    private firestore: AngularFirestore, 
    public pedidoService:PedidoService,
    public auth:AuthService,
    private interaction: InteractionService,
    ) { 
      this.auth.stateUser().subscribe(res=>{
        if (res){
          this.loadUser(res.uid)
        }else {

      }
    });
    }

  ngOnInit() {
    this.getGeneral();
  }

  getGeneral(){
    this.firestoreService.getCollection<MecanicoGeneral>(this.path).subscribe(res => {
      this.mecanicoGenerals = res;
      
    })
  }

  solicitarServicio(servicio: MecanicoGeneral) {
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
