import { Useri, Pedido } from './../Models/models';
import { FirestoreService } from './../Services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { InteractionService } from '../Services/interaction.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent implements OnInit {
  path ='/Solicitudes';
  user:Useri;
  solicitud: Pedido;

  constructor(
    public firestore: FirestoreService,
    public auth:AuthService,
    private interaction: InteractionService,
    ) { 
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
    const path ='/Solicitudes'
    const id = uid;
    this.firestore.getDoc<Pedido>(path, id).subscribe(res => {
      console.log("getSolicitudes", res);
      if(res){
        this.solicitud = res;
      }
      })
  }

  getDatosUser(uid:string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<Useri>(path, id).subscribe(res =>{
      console.log('datos ->', res);
      if (res){
            this.user = res;
      }
    })
  }

}
