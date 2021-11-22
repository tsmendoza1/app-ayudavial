import { PagosComponent } from './Pagos/pagos/pagos.component';
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


const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'miauto',component:MiautoComponent},
  {path: 'mensajes',component:MensajesComponent},
  {path: 'miperfil',component:PerfilComponent},
  {path: 'menu',component:MenuuComponent},
  {path: 'ajustes',component:AjustesComponent},
  {path: 'login',component:LoginComponent},  
  {path: 'ubicacion',component:UbicacionComponent},  
  {path: 'pagos',component:PagosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
