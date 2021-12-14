import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent implements OnInit {

  minutos:number = 0;
  segundos: number = 0;
  timer: any;

  constructor() { }

  ngOnInit() {}

  play() {
    this.timer = setTimeout(() => {
      this.segundos = this.segundos + 1;
      if (this.segundos  == 60) {
        this.segundos  = 0;
        this.minutos = this.minutos + 1;
      }
      this.play();
    }, 1000);
  }

  reiniciar() {
    this.minutos = 0;
    this.segundos = 0;
    clearTimeout(this.timer);
  }

}
