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
    private firestore: FirestoreService) { }

  ngOnInit() {}

  async presentLoading(ev:any) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, espere',
      duration: 1500
     
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Sesión Iniciada');
  }

  getCliente(){
    this.firestore.getCollection()
  }
  
}

