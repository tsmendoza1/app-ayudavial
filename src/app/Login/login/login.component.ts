import { pathToFileURL } from 'url';
import { AuthService } from './../../Services/auth.service';
import { InteractionService } from './../../Services/interaction.service';
import { Cliente, Useri } from './../../Models/models';
import { FirestoreService } from './../../Services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

img:string;
nuevoUsuario: Cliente = {
  nombre: null,
  apellido: null,
  correo: null,
  auto: null,
}

datos:  Useri = {
  nombre: null,
  apellido: null,
  correo:null,
  celular:null,
  password:null,
  uid:null,
  auto:null,
  perfil:'visitante'
}

  constructor(private database:  FirestoreService, private interaction: InteractionService, private auth: AuthService, private firestore: FirestoreService, private router: Router) { }

  
  
  ngOnInit() {
  }

  crearNuevoUsuario(){
    this.interaction.presentLoading("Guardando")
    

    // const path = "Clientes";
    // const id = this.database.getId();
    // this.database.createDoc1(Cliente,path,id).then((res) => {
      // this.interaction.closeloading();
        // this.interaction.presentToast("Registrado con éxito")
    // })
  }

  logout(){
    this.auth.logout();
  }

  async registrarse(){
    this.interaction.presentLoading('Registrando...')
    console.log("datos ->", this.datos);
    const res = await this.auth.resgistrarUser(this.datos).catch(error =>{
      this.interaction.closeloading();
      this.interaction.presentToast('Error')
      console.log("error");
      
    })
    if (res){
      console.log("Ingresado con exito");
      const path = 'Usuarios';
      const id = res.user.uid
      this.datos.uid =id;
      this.datos.password =null
      await this.firestore.createDoc1(this.datos, path, id)
      this.interaction.closeloading();
      this.interaction.presentToast('Registrado con exito');
      this.router.navigate(['/inicio'])
    }
  }
} 
