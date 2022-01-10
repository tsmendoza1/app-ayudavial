import { InteractionService } from './../../Services/interaction.service';
import { Cliente } from './../../Models/models';
import { FirestoreService } from './../../Services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private database:  FirestoreService, private interaction: InteractionService) { }

  ngOnInit() {}


  crearNuevoUsuario(){
    this.interaction.presentLoading("Guardando")
    const cliente: Cliente ={
    nombre: "Andrés",
    apellido: "Zhangallimbay",
    correo: "a-zh666@hotmail.es",
    auto: "Hyundai Elantra"
    }

    const path = "Clientes";
    const id = this.database.getId();
    this.database.createDoc1(cliente,path,id).then((res) => {
      this.interaction.closeloading();
        this.interaction.presentToast("Registrado con éxito")
    })
  }

} 
