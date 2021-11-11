import { MenuuComponent } from 'src/app/menu/menuu/menuu.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/Models/models';

@Component({
  selector: 'app-miauto',
  templateUrl: './miauto.component.html',
  styleUrls: ['./miauto.component.scss'],
})
export class MiautoComponent implements OnInit {


  autos: Auto [] =[
    {
      color: "Azul",
      modelo: "Golf",
      marca: "Volkswagen Golf",
      año: 2021
    },
    {
      color: "Rojo",
      modelo: "Porshe 911",
      marca: "Porshe",
      año: 2021
    },
    {
      color: "Plata",
      modelo: "Elantra",
      marca: "Hyundai",
      año: 2015
    }

    
  ]

  constructor(public popoverController: PopoverController) {

    this.autos.forEach(auto => {
      console.log('su color es: ' ,auto.color);

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
  ira() {
    console.log('ira');
    
  }

}
