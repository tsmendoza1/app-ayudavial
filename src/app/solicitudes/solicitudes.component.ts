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

  user:Useri;
  pedido: Pedido;
  path ='/Solicitudes';

  constructor(
    public firestoreService: FirestoreService,
    public auth:AuthService,
    private interaction: InteractionService,
    ) { 
      this.auth.stateUser().subscribe(res=>{
        if (res){
          this.loadUser(res.uid)
          this.getSolicitudes(res.uid);
        }else {
        }
      })
    }

  ngOnInit() {}

  getSolicitudes(uid:string){
    const id = uid;
    this.firestoreService.getDoc<Pedido>(this.path, id).subscribe(res => {
      console.log("getSolicitudes", res);
      if(res){
        this.pedido = res;
      }
      })
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
