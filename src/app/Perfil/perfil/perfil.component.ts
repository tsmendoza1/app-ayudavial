import { Cliente } from './../../Models/models';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuuComponent } from 'src/app/menu/menuu/menuu.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})

export class PerfilComponent implements OnInit {
  

  clientes: Cliente [] =[
    {
      nombre: 'Andrés',
      apellido: 'Zhangallimbay',
      correo:'a-zh666@hotmail.es',
      auto: 'Hyundai Elantra'
    },
    
  ]

  constructor(public popoverController: PopoverController, private firestore: AngularFirestore) {
    this.clientes.forEach(cliente => {
      console.log('su nombre es: ',cliente.nombre);
      
    })
  }

  ngOnInit() {}
 

  async openMenu(ev: any){
    console.log("abir");
    const menu = await this.popoverController.create({
      component: MenuuComponent,
      translucent: false,
      event: ev
      
    });
    await menu.present();
    
  }
  createDoc () {
    this.firestore.collection('Clientes')
  }


  getCollection (ev:any){
    console.log('prueba');
    event: ev 
    translucent: false
    
    this.firestore.collection('Clientes').valueChanges().subscribe( (res)=> {
    console.log("res:",res);
    
    });
  }


}
