import { AuthService } from './../Services/auth.service';
import { Useri } from './../Models/models';
import { FirestoreService } from './../Services/firestore.service';
import { InteractionService } from './../Services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  login:boolean= false;
  rol:'visitante'|'admin'= null;

  constructor(
    private auth:AuthService, 
    private interaction:InteractionService, 
    private router:Router,
    private firestore: FirestoreService ) {
    this.auth.stateUser().subscribe(res=>{
      if (res){
        console.log("Estas logueado");
        this.login = true;
        this.getDatosUser(res.uid)
      }else {

        console.log("No estas logeado");
        this.login= false;
      }
    }) 
   }

  ngOnInit() {}

  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesion Finalizada')
    this.router.navigate(['/inicio'])
  }

  Login(){
    this.login= true;
  }

  getDatosUser(uid:string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<Useri>(path, id).subscribe(res =>{
      console.log('datos ->', res);
      if (res){
        this.rol = res.perfil
      }
    })
    
  }

}
