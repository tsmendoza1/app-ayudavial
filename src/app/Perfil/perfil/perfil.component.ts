import { FirestoreService } from './../../Services/firestore.service';
import { AuthService } from './../../Services/auth.service';
import { Cliente, Useri } from './../../Models/models';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})

export class PerfilComponent implements OnInit {
  



usuario:Useri;



  constructor(public popoverController: PopoverController, private firestore: FirestoreService,
              private auth:AuthService) {

    this.auth.stateUser().subscribe(res=>{
      if (res){
        console.log("Estas logueado");
        this.getDatosUser(res.uid)
      }else {

        console.log("No estas logeado");

      }
    }) 

  }

  ngOnInit() {}
 




  getDatosUser(uid:string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<Useri>(path, id).subscribe(res =>{
      console.log('datos ->', res);
      if (res){
            this.usuario = res;
      }
    })
    
  }


}
