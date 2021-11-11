import { MensajesComponent } from './../../Mensajes/mensajes/mensajes.component';
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
})
export class UbicacionComponent implements OnInit {

  constructor() { 



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

  ngOnInit() {}

}
