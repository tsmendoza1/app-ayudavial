
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
      color: "Plata",
      modelo: "Elantra",
      marca: "Hyundai",
      tipo:"Sedan",
      fechaAd: "2015"
    }

  ]

  constructor(public popoverController: PopoverController) {

    this.autos.forEach(auto => {
      console.log('su color es: ' ,auto.color);

    })
  }

  ngOnInit() {}


}
