import { GooglemapsComponent } from './googlemaps.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    GooglemapsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [
    GooglemapsComponent
  ]
})
export class GooglemapsModule { }
