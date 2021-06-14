import { Injectable } from '@angular/core';
import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx';
import { Subscription, Observable } from 'rxjs';
import { map, timeInterval } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  myLat:any;
  myLong:any;
  geoloc:Subscription;

  constructor
  (
    private geolocation: Geolocation,
  ) { }


  getPositions() {
    // this.storage.get('units').then((x) => {this.units = x});
    return this.geolocation.watchPosition({
      enableHighAccuracy : true,
      timeout: 500,
      maximumAge: 2000
    }).pipe(map(position => {
      if((<PositionError>position).code != null ){
        return null;
       }
      position = (position as Geoposition);
      this.myLat = position.coords.latitude;
      this.myLong = position.coords.longitude;
      return {lat : this.myLat, long: this.myLong}
    }))
  }
}
  