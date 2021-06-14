import { Component, OnInit, Input } from '@angular/core';
import { poiObject } from '../../../models/poi';
import { PointsofinterestService } from '../../../services/pointsofinterest.service';
import { ModalController } from '@ionic/angular';
import { GenericpoiPage } from '../genericpoi/genericpoi.page';
import { Storage } from '@ionic/storage';
import { CategoryPoi } from 'src/app/models/categoryPoi';

@Component({
  selector: 'app-sortedpoilist',
  templateUrl: './sortedpoilist.page.html',
  styleUrls: ['./sortedpoilist.page.scss'],
})
export class SortedpoilistPage implements OnInit {

  @Input() IdCat: number;
  poiList: poiObject[];
  selectedLanguage: string;
  cat : CategoryPoi;

  constructor(
    private poiservice: PointsofinterestService,
    private modalcontroller : ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.poiservice.context.subscribe(data => {
      this.poiList = data.filter(x => {
        return x.Category_id == this.IdCat
      });
    })
    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});
  }
  close(){
    this.modalcontroller.dismiss();
  }

  async poiModal(id: number){
    const modal = await this.modalcontroller.create({
      component: GenericpoiPage,
      mode : 'ios',
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {'IdPOI': id}
    });
    return await modal.present();
  }

  getName(e: poiObject) : string {
    return this.selectedLanguage == 'fr' ? e.Name_fr : this.selectedLanguage == 'en' ? e.Name_en : e.Name_nl
  }

}
