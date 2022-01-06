import { InteractionService } from './../../Services/interaction.service';
import { AuthService } from './../../Services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from './../../Services/firestore.service';
import { PerfilComponent } from './../../Perfil/perfil/perfil.component';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(public loadingController: LoadingController, 
    private firestore: FirestoreService, private auth: AuthService, private interaction:InteractionService) { }


    credenciales = {
      correo: null,
      password: null
    }

  ngOnInit() {}

  async login(){
    await this.interaction.presentLoading('Ingresando...');  
    console.log("credenciales:", this.credenciales);
    
   const res = await this.auth.login(this.credenciales.correo,this.credenciales.password).catch ( error => {
       this.interaction.closeloading();
       this.interaction.presentToast("usuario o contraseña incorrectos")
   })
   console.log("res -", res);
    if (res) {
      this.interaction.closeloading();
      this.interaction.presentToast("ingresado con éxito ");
      
    }
  }

    async presentLoading(ev:any) {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Por favor, espere',
        duration: 500
       
      });
  
      await loading.present();
  
    }


  }

