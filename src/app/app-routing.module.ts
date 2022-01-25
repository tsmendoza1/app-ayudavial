
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UbicacionComponent } from './Ubicacion/ubicacion/ubicacion.component';
import { LoginComponent } from './Login/login/login.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MiautoComponent } from './auto/miauto/miauto.component';
import { InicioComponent } from './casa/inicio/inicio.component';
import { MensajesComponent } from './Mensajes/mensajes/mensajes.component';
import { PerfilComponent } from './Perfil/perfil/perfil.component';
import { AngularFireAuthGuard, canActivate } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs/operators'
import { AutomotrizComponent } from './automotriz/automotriz.component';
import { ElectricoComponent } from './electrico/electrico.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GeneralComponent } from './general/general.component';
import { GruaComponent } from './grua/grua.component';
import { LoginDosComponent } from './login-dos/login-dos.component';
import { BienvenidoComponent } from './Bienvenido/bienvenido/bienvenido.component';

//const uidAdmin = "OUcJ2XWr0cdwftOB7XeY"
//const onlyAdmin = () => map((user:any) =>  !!user && uidAdmin === user.uid);


const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: '',component:InicioComponent},
  {path: 'miauto',component:MiautoComponent},
  {path: 'mensajes',component:MensajesComponent},
  {path: 'miperfil',component:PerfilComponent,},  //canActivate:[AngularFireAuthGuard] 
  {path: 'login',component:LoginComponent},     //... canActivate (onlyAdmin)
  {path: 'ubicacion',component:UbicacionComponent}, 
  {path: 'automotriz',component:AutomotrizComponent}, 
  {path: 'electrico',component:ElectricoComponent}, 
  {path: 'servicios',component:ServiciosComponent}, 
  {path: 'general',component:GeneralComponent}, 
  {path: 'grua',component:GruaComponent}, 
  {path: 'loginAuto',component:LoginDosComponent}, 
  {path: 'bienvenido',component:BienvenidoComponent}, 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
