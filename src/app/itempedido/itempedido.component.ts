import { PedidoService } from './../Services/pedido.service';
import { Component, Input, OnInit } from '@angular/core';
import { Servicio, ServicioPedido } from '../Models/models';


@Component({
  selector: 'app-itempedido',
  templateUrl: './itempedido.component.html',
  styleUrls: ['./itempedido.component.scss'],
})
export class ItempedidoComponent implements OnInit {

  @Input() servicioPedido:ServicioPedido;

  constructor(
    public pedidoService:PedidoService
  ) {

   }

  ngOnInit() {}

  removeCarrito(){
   // this.pedidoService.getPedido(this.servicioPedido.servicio);
  }

}
