import { InteractionService } from './../Services/interaction.service';
import { AuthService } from './../../../app-ayudavial/src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'app-ayudavial/src/app/Services/firestore.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  login: boolean = false;

  constructor(private auth:AuthService, private interaction:InteractionService, private router:Router, private firestore: FirestoreService) {
    this.auth.stateUser().subscribe(res=>{
      if (res){
        console.log("Estas logueado");
        this.login=true;
        
      }else {

        console.log("No estas logeado");
        this.login=false;
      }
    }) 
   }

  ngOnInit() {}

  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesion Finalizada')
    this.router.navigate(['/inicio'])
  }

  getDatosUser(uid:String){
    const path = "Usuarios";
    const id = uid;
    
  }

}