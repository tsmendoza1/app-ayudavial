
import { UbicacionComponent } from './Ubicacion/ubicacion/ubicacion.component';
import { LoginComponent } from './Login/login/login.component';
import { FirestoreService } from './Services/firestore.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './casa/inicio/inicio.component';
import { MiautoComponent } from './auto/miauto/miauto.component';
import { MensajesComponent } from './Mensajes/mensajes/mensajes.component';
import { PerfilComponent } from './Perfil/perfil/perfil.component';
import { MenuuComponent } from './menu/menuu/menuu.component';
import { AjustesComponent } from './Ajustes/ajustes/ajustes.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({

  declarations: [
    AppComponent,
    InicioComponent,
    MiautoComponent,
    MensajesComponent,
    PerfilComponent,
    MenuuComponent,
    AjustesComponent,
    LoginComponent,
    UbicacionComponent,
  

  ],

  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule, 
      AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule, 
      AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
