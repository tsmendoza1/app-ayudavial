import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';

declare var google:any;
@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apikey = environment.ApiKeyGoogleMaps;
  mapsloaded = false;

  constructor() { }

  init(renderer:any, document:any): Promise<any> {
    return new Promise((resolve)=> {

      if(this.mapsloaded){
        console.log("google is preview loaded")
        recolve(true);
        return;
      }

      const script = renderer.createElement('script');
      script.id= 'googlemaps';

      window['mapInit'] = () => {
        this.mapsloaded = true;
        if(google){
          console.log('google is loaded')
        }else{
          console.log('google is not defined');
        }
        resolve(true);
        return;
  
         }

         if(this.apikey){

         }else{

         }

         renderer.appendChild(document.body, script);
      }
    })
  }
}
