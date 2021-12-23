import { InteractionService } from './../Services/interaction.service';
import { GooglemapsService } from './googlemaps.service';
import { DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Plugins } from 'protractor/built/plugins';


const {Geolocation}:Plugins;
declare var google:any;
@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  //coordenadas Cuenca
  @Input()position = {
    lat: -2.898116,
    lng: -78.99958149999999
  };

  label ={
    titulo: 'Ubicacion',
    subtitulo: 'Mi ubicacion de envio'
  }

  map: any;
  marker:any;
  infowindow:any;
  positionSet:any;

  @ViewChild('map') divmap:ElementRef;

  constructor(private renderer:Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService:GooglemapsService,
    private modalController:ModalController,
     ) { }

  ngOnInit():void {
    this.init();
  }
    
  async init () {
    this.googlemapsService.init(this.renderer, this.document).then(() =>{
    this.initMap();
  }).catch (err)=>{
    console.log(err);
    
  };
}

initMap(){
  const position = this.position;
  let latLng = new google.maps,latLng(position.lat, position.lng);

  let mapOptions = {
    center:latLng,
    zoom:15,
    disableDefaultUi:true,
    clickableIcons:false      
  }; 

  this.map = new this.google.maps.Map(this.divMap.nativeElement, mapOptions);
  this.marker = new this.google.maps.Marker({
    map= this.map,
    animation :google.maps.Animation.DROP,
    draggable :true,
  });

  this.clickHandleEvent();
  this.infowindow = new google.maps.infowindow();
  if(this.label.titulo.length) {
    this.addMarker(position);
    this.setinfowindow(this.marker, this.label.titulo, this.label.subtitulo);
  }
}

clickHandleEvent(){
  this.map.addListener('click', (event:any)=>{
      const position={
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.addMarker(position);
  });
}

addMarker(position:any):void{
  let latLng = new google.maps.LatLng(position.lat, position.lng);

  this.marker.setPosition(latLng);
  this.map.panTo(position);
  this.positionSet= position;

}

setInfowindow(marker:any, titulo:string, subtitulo:string){
    const contentString = '<div id="contentInsideMap">'+
                          '<div>' +
                          '</div>' +
                          '<p style="font=weight:bold; margin-bottom:Spx">'+titulo+'</p>'+
                          '<div id = "bodyContent">'+
                          '<p class= "normal m - 0 ">' +
                          subtitulo + '</p>'+
                          '</div>' +
                          '</div>';
 
 this.infowindow.setContent('ContentString');
 this.infowindow.open(this.map, marker);
}
   
async mylocation(){
  console.log('mylocation()-> get');

  Geolocation.getCurrentPosition().then((res)->{
  const position = {
    lat: res.coords.latitude,
    lng: res.coords.longitude,
  }
  this.addMarker(position);
  });

}

aceptar(){
  console.log('click aceptar ->', this.positionSet);
  this.modalController.dismiss({pos: this.positionSet})
  
}
}
