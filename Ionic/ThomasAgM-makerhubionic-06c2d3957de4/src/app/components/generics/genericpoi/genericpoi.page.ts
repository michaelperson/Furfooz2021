import { Component, OnInit, Input } from '@angular/core';
import { poiObject } from '../../../models/poi';
import { ModalController } from '@ionic/angular';
import { PointsofinterestService } from '../../../services/pointsofinterest.service';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-genericpoi',
  templateUrl: './genericpoi.page.html',
  styleUrls: ['./genericpoi.page.scss'],
})
export class GenericpoiPage implements OnInit {

  @Input() IdPOI: number;
  poi : poiObject;
  selectedLanguage : string;
  convertedImg : string;

  constructor(private modalcontroller : ModalController,
    private poiservice : PointsofinterestService,
    private storage: Storage,
    private router : Router
    ) { }

  ngOnInit() {
    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});
    this.poiservice.context.subscribe(data => {
      
      this.poi = data.find(x => {
        return x.Id == this.IdPOI
      });
      this.getImg(this.poi);
    })
  }

  close() {
    this.modalcontroller.dismiss();
  }

  getName (e: poiObject) : string  {
    return this.selectedLanguage == 'fr' ? e.Name_fr : this.selectedLanguage == 'en' ? e.Name_en : e.Name_nl
  }

  getDescription (e: poiObject) : string  {
    return this.selectedLanguage == 'fr' ? e.Description_fr : this.selectedLanguage == 'en' ? e.Description_en : e.Description_nl
  }

  getImg(p : poiObject) : string {
    return environment.API_PLANT_IMG +
    this.poi.ImageUrl;
  }

  GetCamera(Id : number){
    let navigationExtras:NavigationExtras={
      queryParams:{
        special:JSON.stringify(Id)
      }
    }
    this.router.navigate(['compo'],navigationExtras);


  }

}
