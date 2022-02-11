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
  solicitudes:Pedido;
  pedido:Pedido;

  estados:EstadoPedido []= ['En espera', 'En camino', 'Entregado', 'enviado']

  mecanicoAutomotrizs: MecanicoAutomotriz[]=[];

  newMecanico:MecanicoAutomotriz= {
    Nombre:'',
    PrecioMinimo:'',
    Telefono:null,
    id:'',
  }
  user: Useri;
  rol:'visitante'|'admin'= null;

  private path = 'Mecanico automotriz/'

  constructor(
    public firestoreService: FirestoreService, 
    private firestore: AngularFirestore, 
    public pedidoService:PedidoService,
    public auth:AuthService,
    private interaction: InteractionService,
      ) {
          this.auth.stateUser().subscribe(res=>{
            if (res){
                this.login = true;
                this.loadUser(res.uid)
                this.getSolicitudes(res.uid)
            }else {
                this.login= false;
                }
              })
             }

  ngOnInit() {
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

  getSolicitudes(uid:string){
    const path ='/Solicitudes'
    const id = uid;
    this.firestoreService.getDoc<Pedido>(path, id).subscribe(res => {
      console.log("getSolicitudes", res);
      if(res){
        this.solicitudes = res;
      }
      })
  }

  addNew(){
    this.newMecanico = {
      Nombre:'',
      Telefono:null,
      PrecioMinimo: '',
      id:this.firestoreService.getId()
    }
  }

  editar(mecanicoAutomotriz:MecanicoAutomotriz){
   console.log('editar->', mecanicoAutomotriz);
   this.newMecanico = mecanicoAutomotriz;
  }

  async guardar(){
    await this.interaction.presentLoading('Guardando...');
    console.log('Guardar->', this.newMecanico);
    const path = 'Mecanico automotriz';
    await this.firestoreService.createDoc1(this.newMecanico, path, this.newMecanico.id)
    this.interaction.closeloading();
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
      // va a traer la informacion del usuario y guarda en la variable this.user
  }
}
