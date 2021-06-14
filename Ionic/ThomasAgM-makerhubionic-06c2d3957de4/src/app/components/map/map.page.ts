import { Component, AfterContentInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import{Map, tileLayer, marker, polyline, Icon } from "leaflet";
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import L from "leaflet";
import 'node_modules/leaflet-gpx';
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';
import { RouterLink, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MapmenuPage } from '../generics/mapmenu/mapmenu.page';
import { PointsofinterestService } from '../../services/pointsofinterest.service';
import { poiObject } from '../../models/poi';
import { GenericpoiPage } from '../generics/genericpoi/genericpoi.page';
import { CategoryPoi } from '../../models/categoryPoi';
import { CategoryPoiService } from '../../services/category-poi.service';
import { Storage } from '@ionic/storage';
import { ok } from 'assert';
import { Subscription } from 'rxjs';
import { LocalisationService } from 'src/app/services/localisation.service';

declare var window;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements AfterContentInit {
  marker : marker;
  map: L.Map;
  latLong = [];
  myLat: any;
  myLong: any;

  CategoryPoiList: CategoryPoi[];
  selectedLanguage : string;

  PoiList: poiObject[];

  rl : RouterLink;
  units : string;

  todayDay : number;
  todayMonth: number;

  // geoloc : Subscription;

  constructor(
    private geolocation: Geolocation,
    private detectChangeRef: ChangeDetectorRef,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController,
    private router: Router,
    public modalController: ModalController,
    private poiService: PointsofinterestService,
    private catService : CategoryPoiService,
    private storage: Storage,
    private alertController: AlertController,
    private localisation: LocalisationService
  ) {
    window.map = this;
    this.todayDay = new Date().getDate();
    this.todayMonth = new Date().getMonth();
  }
  
  
  showMap(){
    
    // let mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlldWdpbGxhcmQiLCJhIjoiY2tmY2lkZHhwMTBuczMybzhseW42d3R0NSJ9.Xw8nn6zfWoCZtuK15d0V3w';
    
    // let attribute = '&copy; <a href="https://www.mapbox.com">MapBox</a> contributors'
    
    // let OutDoors = L.tileLayer(mbUrl, {id : "mapbox/outdoors-v11",
    //   detectRetina: true,
    //   attribution: attribute
    // });
    
    // let Satellite = L.tileLayer(mbUrl, { id : "mapbox/satellite-v9",
    //   detectRetina: true,
    //   attribution: attribute
    // });
    
    // let Streets = L.tileLayer(mbUrl, { id : "mapbox/streets-v11",
    //   detectRetina: true,
    //   attribution: attribute
    // });
    
        let DrawnMap = '../../../assets/img/MapSVG.svg'

    // let baseLayers = {
    //   'Outdoor': OutDoors,
    //   'Satellite': Satellite,
    //   'Streets' : Streets
    // }

    let markers : any = {};
    
    let promise = new Promise((resolve, reject) => {
      this.catService.context.subscribe(catdata => {this.CategoryPoiList = catdata
        if(catdata.length == 0) return
        
        this.poiService.context.subscribe(poidata => {this.PoiList = poidata
          if(poidata.length == 0) return
          for(let cat of this.CategoryPoiList)
          {
            let list = [];
            for(let p of this.PoiList.filter(x=> x.Category_id == cat.Id))
            {
              let poiDayStart = p.StartDate != null ? new Date(p.StartDate).getDate() : 1;
              let poiDayEnd = p.EndDate != null ? new Date(p.EndDate).getDate() : 31;
              let poiMonthStart = p.StartDate != null ? new Date(p.StartDate).getMonth() : 0;
              let poiMonthEnd = p.EndDate != null ? new Date(p.EndDate).getMonth() : 11;

              
              
              if(p.Latitude != null 
                && (this.todayDay >= poiDayStart && this.todayMonth >= poiMonthStart && this.todayDay <= poiDayEnd && this.todayMonth <= poiMonthEnd))
              {
                let myIcon = new Icon(
                  {
                    iconUrl: `assets/markers/marker-icon-${cat.PinColor}.png`,
                    shadowUrl: 'assets/markers/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    shadowSize: [41, 41]
                  }
                )


                let _marker = L.marker([p.Latitude,p.Longitude], {icon: myIcon}).bindPopup(p.Name_fr);
                
                list.push(_marker);
              }
            }
            if(this.PoiList.filter(x=> x.Category_id == cat.Id && x.Latitude!= null).length > 0)
            {
              markers[cat.Name_fr] = L.layerGroup(list);
            }
            
          }
        resolve(null);
        })
      })
    }).then( () => {
      
      this.map = L.map('myMap', {
        center : [50.2132,4.9540],
        zoom : 15.75,
        // layers : [OutDoors],
        // minZoom : 15,
        // maxZoom : 17
        
      })

      var bounds2 = [[50.210589676241895, 4.949827889588096], [50.21672467928193, 4.958798070911629]];
      L.imageOverlay(DrawnMap, bounds2).addTo(this.map);
      
      let southWest = L.latLng([50.2075, 4.9372]);
      let northEast = L.latLng([50.2188, 4.9681]);
      
      let bounds = L.latLngBounds(southWest, northEast);

      //Polyline pour les moutons
      // var hexa = L.polygon([
      //   [50.212702,4.952329],
      //   [50.212251,4.952299],
      //   [50.212236,4.953004],
      //   [50.212683,4.953027],
      //   [50.212702,4.952329]
			// ], {color: 'red'}).addTo(this.map);

      this.map.setMaxBounds(bounds);

      // L.control.layers(baseLayers ,markers).addTo(this.map);
      L.control.scale().addTo(this.map);

      this.getPositions();
    })
  }
  
  ngAfterContentInit() {
    this.storage.get('selectedLanguages').then((x) => {
    if(x == null)
    {
      this.selectedLanguage = 'fr';
      this.storage.set('selectedLanguages','fr').finally(() => {
      });
    }
    else
    {
      this.selectedLanguage = x
    }
    })
    this.units = 'km';
  }
  
  ionViewDidEnter() {
    this.showMap();
  }

  ngOnDestroy() {
    // this.geoloc.unsubscribe();
  }
  
  getPositions() {
    this.storage.get('units').then((x) => {this.units = x});
    this.localisation.getPositions().subscribe(position => {
      if(!position) return;
        this.detectChangeRef.detectChanges();
        this.myLat = position.lat;
        this.myLong = position.long;
        for(let e of this.PoiList)
        {
          let eventLocation = { lat: e.Latitude, lng: e.Longitude };
          let myLocation = { lat: position.lat, lng: position.long };

          let dist = this.getDistanceBetweenPoints(eventLocation, myLocation, this.units);

          if(e.Latitude != null)
          {
            e.CurrentPositionDist = dist;
          }
          else
          {
            e.CurrentPositionDist = 0;
          }

          if(e.AlreadyShown==false)
          {
            if(dist < e.Interval && e.IsSeen == false)
            // if(dist < 16 && e.IsSee == false)
            {
              let alert = this.alertCtrl.create({
                message: `Voulez vous voir ${e.Name_fr} ?`,
                buttons: [
                  {
                    text: 'Non',
                    role: 'cancel',
                    handler: () => {
                    }
                  },
                  {
                    text: 'Oui',
                    handler: () => {
                      e.IsSeen = true;
                      this.poiModal(e.Id);
                    }
                  }
                ]
              });
              alert.then(a => {a.present()});
            }
            e.AlreadyShown = true;
          }
        }
        this.latLong = [ 
          position.lat,
          position.long
        ];

        this.showMarker(this.latLong)

    },(e) => console.log(e))
  }
  showMarker(latLong){

    let currentIcon = new Icon(
      {
        iconUrl: 'assets/markers/marker-icon-red.png',
        shadowUrl: 'assets/markers/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41]
      }
    )

    if(this.marker == null) {
      this.marker = marker(this.latLong, {icon: currentIcon});
      this.marker.addTo(this.map)  
    }
    else{
      this.marker.setLatLng(this.latLong);
    }
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
  setPosition() {
    this.map.panTo([this.myLat, this.myLong]);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: MapmenuPage,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {'Eventlist' : this.PoiList.filter(x => x.CurrentPositionDist > 0)}
    });
    return await modal.present();
  }

  async poiModal(id:number) {
    const modal = await this.modalController.create({
      component: GenericpoiPage,
      mode: 'ios',
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {'IdPOI' : id}
    });
    return await modal.present();
  }

  async refreshDistance () {
    
    this.units = await this.storage.get('units');
    
    for(let e of this.PoiList)
        {
          let eventLocation = { lat: e.Latitude, lng: e.Longitude };
          let myLocation = { lat: this.myLat, lng: this.myLong };

          let dist = this.getDistanceBetweenPoints(eventLocation, myLocation, this.units);

          if(e.Latitude != null)
          {
            e.CurrentPositionDist = dist;
          }
          else
          {
            e.CurrentPositionDist = 0;
          }
        }
  }

  // Bouton légende 
  async ShowLegend() {

    let rowMessage = [];

    let langue;
    
    await this.storage.get('selectedLanguages').then((x) => {langue = x});

    for(let cat of this.CategoryPoiList)
    {
      if(this.PoiList.filter(x=> x.Category_id == cat.Id && x.Latitude!= null).length > 0)
      {
        if(cat.PinColor != null)
        {
          rowMessage.push(`
          <table> 
            <tr>
              <td><img src="assets/markers/marker-icon-${cat.PinColor}.png" alt="" > </td>
              <td> ${this.getName(cat, langue)} </td>
            </tr>
          </table>
          `);
        }
      }
    }


    const alert = await this.alertController.create({
      header: langue == 'fr' ? 'Légende' : langue == 'en' ? 'Legend' : 'Legende',
      message: rowMessage.join('<br>'),
      buttons: ['OK']
    });

    await alert.present();
  }

  getName (e: CategoryPoi, langue: string) : string  {
    return langue == 'fr' ? e.Name_fr : langue == 'en' ? e.Name_en : e.Name_nl
  }
  
  GetCamera(Id : number){
    let navigationExtras:NavigationExtras={
      queryParams:{
        special:JSON.stringify(Id)
      }
    }
    this.router.navigate(['cameras'],navigationExtras);


  }
  GoToList(){
    this.router.navigate(['mapmenu'], {state:{Eventlist: this.PoiList}})

  }
}