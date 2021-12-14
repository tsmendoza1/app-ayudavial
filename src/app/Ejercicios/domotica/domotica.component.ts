import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domotica',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.scss'],
})
export class DomoticaComponent implements OnInit {

  focos: FocoI [] = [
    {
      nombre: "Cuarto Andrés",
      estado: false,
      pin: 4
     },
     {
      nombre: "Cuarto Narcisa",
      estado: false,
      pin: 5
     },
     {
      nombre: "Cocina",
      estado: false,
      pin: 6
     },
     {
      nombre: "Sala",
      estado: false,
      pin: 7
     }

  ];

  constructor() { }

  ngOnInit() {}


  apagar(foco:FocoI) {
    foco.estado = false;
  }

  cambiarEstado(foco:FocoI) {
    foco.estado = !foco.estado;
  }


  prender(foco:FocoI) {
    foco.estado = true;
  }
}


interface FocoI {
  nombre: string;
  estado: boolean;
  pin: number;
}
