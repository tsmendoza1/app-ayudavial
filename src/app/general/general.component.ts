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
  rol:'visitante'|'admin'= null;

  mecanicoGenerals: MecanicoGeneral []=[];

  newGeneral: MecanicoGeneral = {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null,
    id:'',
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
       this.rol=res.perfil;
      }
    })
  }

  editar(mecanicoGeneral:MecanicoGeneral){
    console.log('editar->', mecanicoGeneral);
    this.newGeneral = mecanicoGeneral;
   }
 
   async guardar(){
     await this.interaction.presentLoading('Guardando...');
     console.log('Guardar->', this.newGeneral);
     const path = 'Mecanico general';
     await this.firestoreService.createDoc1(this.newGeneral, path, this.newGeneral.id)
     this.interaction.closeloading();
   }
}
