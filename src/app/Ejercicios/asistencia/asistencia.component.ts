import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  estudiantes:Asistencia1[] = [];
  nombre: string = ""

  constructor() { }

  ngOnInit() {}

  registrar () {
    const  nuevo: Asistencia1 = {
      nombre: this.nombre,
      time: new Date()
    };

    this.estudiantes.push(nuevo);
    this.nombre = "";

  }

  remove(index: number) {
    this.estudiantes.splice(index);
  }
}

interface Asistencia1 {
  nombre: string;
  time: Date;
}

