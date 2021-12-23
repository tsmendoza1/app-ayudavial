import { UbicacionComponent } from './Ubicacion/ubicacion/ubicacion.component';
import { LoginComponent } from './Login/login/login.component';
import { FirestoreService } from './Services/firestore.service';
import { NgModule, Component } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { AutomotrizComponent } from './automotriz/automotriz.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ElectricoComponent } from './electrico/electrico.component';
import { GeneralComponent } from './general/general.component';
import { GruaComponent } from './grua/grua.component';





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
    AutomotrizComponent,
    ServiciosComponent,
    ElectricoComponent,
    GeneralComponent,
    GruaComponent,
  ],

  
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
      AppRoutingModule, 
      FormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule, 
      AngularFirestoreModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
     // Register the ServiceWorker as soon as the app is stable
// or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
  })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
