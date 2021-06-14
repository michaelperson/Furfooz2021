import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlantModel } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ModalController } from '@ionic/angular';
import { PlantDetailsComponent } from 'src/app/components/path/plant-details/plant-details.component';
import { state } from '@angular/animations';
import { Storage } from '@ionic/storage';
import { poiObject } from 'src/app/models/poi';
import { PointsofinterestService } from 'src/app/services/pointsofinterest.service';
import { PoiDetailsComponent } from '../../poi/poi-details/poi-details.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  listPlant:PlantModel[];
  listPoI:poiObject[];
  selectedLanguage : string;

  constructor(
    protected plantService:PlantService,
    private modalController: ModalController,
    private storage:Storage,
    private detectChangeRef: ChangeDetectorRef,
    protected poiService : PointsofinterestService
    )
    { }

  ngOnInit() {
    
    
    this.storage.get("selectedLanguages").then( x => {
      this.selectedLanguage = x;
      
    });
    
  }
  
  ionViewWillEnter() {
    this.storage.get("savedPlant").then( x => {
      this.listPlant = x;
    })

    this.storage.get("savedPoI").then( x => {
      this.listPoI = x;
    })  
    this.storage.get
    this.detectChangeRef.detectChanges();
  }

  async openDetails(id:number){
    const modal = await this.modalController.create({
      component: PlantDetailsComponent,
      cssClass: 'my-custom-class',
      componentProps: { 
        idPlant: id,
        library : true
      }
    });
    return await modal.present();
  }

  async openPoiDetails(id:number){
    const modal = await this.modalController.create({
      component: PoiDetailsComponent,
      cssClass: 'my-custom-class',
      componentProps: { 
        poiId: id,
        library : true
      }
    });
    return await modal.present();
  }

  deleteFromList(id : number){
    this.listPlant = this.listPlant.filter(x => x.id != id);
    this.storage.set("savedPlant", this.listPlant) 
  }
  deleteFromPoiList(id : number){
    this.listPoI = this.listPoI.filter(x => x.Id != id);
    this.storage.set("savedPoI", this.listPoI) 
  }

  getNamePlant(p : PlantModel){
    return (this.selectedLanguage == "nl" ? p.name_nl : this.selectedLanguage == "en" ? p.name_en : p.name_fr) || p.name_la;
  }

  getName(p : poiObject){
    return this.selectedLanguage == "nl" ? p.Name_nl : this.selectedLanguage == "en" ? p.Name_en : p.Name_fr;
}
}
