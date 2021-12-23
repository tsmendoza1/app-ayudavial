import { UbicacionComponent } from './Ubicacion/ubicacion/ubicacion.component';
import { LoginComponent } from './Login/login/login.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './Ajustes/ajustes/ajustes.component';
import { MiautoComponent } from './auto/miauto/miauto.component';
import { InicioComponent } from './casa/inicio/inicio.component';
import { MensajesComponent } from './Mensajes/mensajes/mensajes.component';
import { MenuuComponent } from './menu/menuu/menuu.component';
import { PerfilComponent } from './Perfil/perfil/perfil.component';
import { AngularFireAuthGuard, canActivate } from '@angular/fire/compat/auth-guard';

//const uidAdmin = "OUcJ2XWr0cdwftOB7XeY"
//const onlyAdmin = () => map((user:any) =>  !!user && uidAdmin === user.uid);


const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: '',component:InicioComponent},
  {path: 'miauto',component:MiautoComponent},
  {path: 'mensajes',component:MensajesComponent},
  {path: 'miperfil',component:PerfilComponent,},  //canActivate:[AngularFireAuthGuard] 
  {path: 'menu',component:MenuuComponent},
  {path: 'ajustes',component:AjustesComponent, }, //... canActivate (onlyAdmin)
  {path: 'login',component:LoginComponent},  
  {path: 'ubicacion',component:UbicacionComponent},   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
