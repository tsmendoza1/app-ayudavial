import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {

  private asientos = [];
  newAsiento ;
  constructor() { }

agregarAsientos(){
  for (let index = 1; index; index++) {
    const newAsiento = {
      numero: index,
      estado: true
    }
   this.asientos.push(newAsiento);
   console.log(this.asientos);    
  }
   
}

  ngOnInit() {}

}
