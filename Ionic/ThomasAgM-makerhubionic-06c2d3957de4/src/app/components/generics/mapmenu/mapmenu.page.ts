import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { poiObject } from '../../../models/poi';
import { Storage } from '@ionic/storage';
import { GenericpoiPage } from '../genericpoi/genericpoi.page';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { CamerasService } from 'src/app/services/cameras.service';
import { LocalisationService } from 'src/app/services/localisation.service';
import { PoiDetailsComponent } from '../../shared/poi/poi-details/poi-details.component';


@Component({
  selector: 'app-mapmenu',
  templateUrl: './mapmenu.page.html',
  styleUrls: ['./mapmenu.page.scss'],
})
export class MapmenuPage implements OnInit {
  
  
  @Input() Eventlist : poiObject[];
  selectedLanguage: string;
  units : string;
  geoloc: Subscription;
  lock: boolean=false;
  
  constructor(
    private geolocation: Geolocation,
    private localisation: LocalisationService,
    private modalcontroller : ModalController,
    private storage : Storage,
    private Router : Router,
    private camService: CamerasService,
  ) { }

  ngOnInit() {
    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});
    this.storage.get('units').then((x) => {this.units = x});
    this.Eventlist = history.state.Eventlist?.filter(x => x.CurrentPositionDist > 0).map(e => {
     
     e.CameraIsActive = e.Camera_Id == null? false:  this.EstActive(e.Camera_Id) ;
  
     return e ;
    });
    // this.listSort(); 
    this.getPositions();
  }

  close() {
    this.modalcontroller.dismiss();
  }

  listSort(){
    this.Eventlist.sort((a,b) => a.CurrentPositionDist > b.CurrentPositionDist ? 1 : -1);
  }

  getName(e: poiObject) : string {
    return this.selectedLanguage == 'fr' ? e.Name_fr : this.selectedLanguage == 'en' ? e.Name_en : e.Name_nl;
  }

  async poiModal(id : number) {
    const modal = await this.modalcontroller.create({
      component: PoiDetailsComponent,
      mode: 'ios',
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'poiId' : id,
        library : false
      }
    });
    return await modal.present();
  }

  

  EstActive(id: number){
    this.camService.GetCameraById(id).subscribe(data => {
      this.Eventlist.find(x => x.Camera_Id == id).CameraIsActive = data.EstActif;
    });
    return true;
  }

  GetCamera(e:poiObject){
    // return this.Eventlist.filter(x => x.Camera_id != null);
    return e.Camera_Id;
  };
  test(current:any){ 
    this.Router.navigate(["cameras" , current.Camera_Id],  {state:{cameraname: this.getName(current)}});
    this.modalcontroller.dismiss();
    // event.stopPropagation();
    // window.location.pathname="cameras" + current.Camera_Id;
    // this.Router.navigate(["home"])
    // window.location.reload();
    // // event.stopPropagation();
  };
  goToMap(){
    this.Router.navigate(['map'])
  }
  getPositions() {
    
    this.storage.get('units').then((x) => {this.units = x});
    
    this.localisation.getPositions().subscribe(position => {
     
      if(this.lock) {
        return;
      }
      this.lock=true;
      
       let present = false; 
      if (position == null){
        return;
      }
    for (let item of this.Eventlist){
   
      
      let dist = this.getDistanceBetweenPoints({'lat': item.Latitude, 'lng': item.Longitude}, {'lat': position.lat, 'lng': position.long}, this.units);

      if(dist > 0.03){
        if(!present){
          item.DisplayClass = "passe"
        }
        else{
          item.DisplayClass = "future"
        }
        

        
      } 
      else {
        item.DisplayClass = "present"
        present = true;
      }
    }
    this.lock = false;
    },(e) => console.log(e))
  }

  
  getDistanceBetweenPoints(start, end, units){
    let earthRadius = {
        miles: 3958.8,
        km: 6371
    };

    let R = earthRadius[units || 'km'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;

  }

  toRad(x){
    return x * Math.PI / 180;
  }

  
}
