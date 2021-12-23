import { Cliente } from './../../app.module';
import { GooglemapsComponent } from './../../googlemaps/googlemaps.component';

import { InteractionService } from './../../Services/interaction.service';
import { MensajesComponent } from './../../Mensajes/mensajes/mensajes.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Routes } from '@angular/router';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { LoadingController, Platform, ToastController, ModalController } from '@ionic/angular';




@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
  
})
export class UbicacionComponent {

  cliente: Cliente= {
      ubicacion:null
  }
   
  constructor(public  LoadingController: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform) { 

    const routes: Routes = [
      {
        path: 'tabs',
        component: MensajesComponent,
        children: [
          {
            path: 'schedule',
            children: [
              {
                path: '',
                loadChildren: '../schedule/schedule.module#ScheduleModule'
              }
            ]
          },
          {
            path: '',
            redirectTo: '/app/tabs/schedule',
            pathMatch: 'full'
          }
        ]
      }
    ];
  }
 async addDirection(){
   const ubicacion = this.cliente.ubicacion
   let position = {
     lat: -2.898116,
     lng: -78.99958149999999
   };
   if(ubicacion!==null){
      position=ubicacion;
   }

   const modalAdd = await this.modalController.create({
     Component:GooglemapsComponent,
     mode: 'ios',
     swipeToClose: true,
     componentProps:{position}
   });
   await modalAdd.present();
   const {data} = await modalAdd.onWillDismiss();
   if (data){
      console.log('data->', data);
      this.cliente.ubicacion=data.pos;
      console.log('this.cliente->',this.cliente);
      
   }
 }

}


