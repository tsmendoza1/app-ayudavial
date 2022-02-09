import { InteractionService } from './../Services/interaction.service';
import { AuthService } from './../Services/auth.service';
import { PedidoService } from './../Services/pedido.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../Services/firestore.service';
import { MecanicoAutomotriz, Useri, EstadoPedido, Pedido } from './../Models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automotriz',
  templateUrl: './automotriz.component.html',
  styleUrls: ['./automotriz.component.scss'],
})
export class AutomotrizComponent implements OnInit {

  login:boolean= false;
  misPedidos:Pedido;
  solicitudes:Pedido[];

  estados:EstadoPedido[] = [
    'enviado',
    'En camino',
    'Entregado',
    'En espera'
  ]

  mecanicoAutomotrizs: MecanicoAutomotriz[]=[];

  newMecanico:MecanicoAutomotriz= {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null 
  }
  user: Useri;

  private path = 'Mecanico automotriz/'

  constructor(public firestoreService: FirestoreService, 
            private firestore: AngularFirestore, 
            public pedidoService:PedidoService,
            public auth:AuthService,
            private interaction: InteractionService,
            ) {
              this.auth.stateUser().subscribe(res=>{
                if (res){
                  this.login = true;
                  this.loadUser(res.uid)
                }else {
                  this.login= false;
                }
              })
             }

  ngOnInit() {
    // suscribirse a los aestados de autenticacionde  del usurio
    // if (res)
    // llamar a la funcion loadinfo user
    this.getMecanicoA();
  }

  getMecanicoA(){
    this.firestoreService.getCollection<MecanicoAutomotriz>(this.path).subscribe(res => {
      console.log("res", res);
      this.mecanicoAutomotrizs = res;
    })
  }

  solicitarServicio(servicio: MecanicoAutomotriz) {
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

  loadMiPedido(uid: string) {
    const path = 'Solicitudes/';
    this.firestoreService.getDoc(path, uid).subscribe(res=>{
      console.log('loadMiPedido',res);
      if(res){
        
      }
    });
    // traigo pedido de la base de datos e igualo a una variable que se puede llamar mis pedidos 
    // esta variable tiene el tipo : pedido
    // el puede ve su estado y puede ver el numero de whataao del mecanico o del que sea  
  }

  loadSolicitudes() {
    const path = 'Solicitudes/';
    this.firestoreService.getCollection<Pedido>(path).subscribe(res=>{
      console.log('loadSolicitudes', res);
      if (res){
        this.solicitudes = res;
      }
    });
   //  eso guardo en una variabe de tipo : pedido[]  
   // boton de hwtasapp del   usaurio que solicito el servicio
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
