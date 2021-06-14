import { ChangeDetectorRef, Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import { SettingsPage } from './components/settings/settings.page';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { CategoryPoiService } from './services/category-poi.service';
import { CategoryPoi } from './models/categoryPoi';
import { SortedpoilistPage } from './components/generics/sortedpoilist/sortedpoilist.page'
import { RefresherEventDetail } from '@ionic/core';
import { poiObject } from './models/poi';
import { FlobetteComponent } from './components/flobette/flobette.component';
import { PointsofinterestService } from './services/pointsofinterest.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';
import { PoiDetailsComponent } from './components/shared/poi/poi-details/poi-details.component';
import { ModalIntroComponent } from './components/shared/intro/modal-intro/modal-intro.component';

declare var window;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  CategoryPoiList: CategoryPoi[];
  error : any;
  selectedLanguage : string;
  CategoryName : string[] = [];
rootpage: any;
  PoiList: poiObject[];

  CategoryNotDelete: number[] = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
    public translate: TranslateService,
    private storage: Storage,
    private categoryPoiService: CategoryPoiService,
    private poiService : PointsofinterestService,
    private screenOrientation: ScreenOrientation,
    private router: Router,
  ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      
      this.initializeApp();
      translate.addLangs(['fr','en','nl']);
      translate.setDefaultLang('fr');
      storage.get('selectedLanguages').then((x) => {translate.use(x)});
      this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});        
      this.categoryPoiService.context.subscribe(data => {
        this.CategoryPoiList = data; this.error = data;        
        for (let index = 0; index < data.length; index++) {
          let language = this.selectedLanguage == 'fr' ? data[index].Name_fr : this.selectedLanguage == 'en' ? data[index].Name_en : data[index].Name_nl;
          this.CategoryName.push(language);
        }
      });

      this.filteringCategory();
      window.menu = this;
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.storage.get("introShown").then(v => {
      if(!v)
        this.openModalIntro();
    })
  }

  async settingsModal() {
    const modal = await this.modalController.create({
      component: SettingsPage,
      mode: 'ios',
      cssClass: 'my-custom-class',
      swipeToClose: true
    });
    return await modal.present();
  }

  async listpoiModal(id:number) {
    const modal = await this.modalController.create({
      component: SortedpoilistPage,
      mode: 'ios',
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {'IdCat' : id}
    });
    return await modal.present();
  }

  setLangue(langue: string) {
    this.storage.set('selectedLanguages',langue).finally(() => {
      this.selectedLanguage = langue;
      this.translate.use(langue)
      for (let index = 0; index < this.CategoryPoiList.length; index++) {
        let language = this.selectedLanguage == 'fr' ? this.CategoryPoiList[index].Name_fr : this.selectedLanguage == 'en' ? this.CategoryPoiList[index].Name_en : this.CategoryPoiList[index].Name_nl;
        this.CategoryName[index] = language;
      }
      try {
        window.flobette.refreshMenuItem();      
      } catch (error) {}
    });
  }
  
  getName (e: CategoryPoi) : string  {
    return this.selectedLanguage == 'fr' ? e.Name_fr : this.selectedLanguage == 'en' ? e.Name_en : e.Name_nl
  }

  refreshCatName() {
    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});
    for (let index = 0; index < this.CategoryPoiList.length; index++) {
      let language = this.selectedLanguage == 'fr' ? this.CategoryPoiList[index].Name_fr : this.selectedLanguage == 'en' ? this.CategoryPoiList[index].Name_en : this.CategoryPoiList[index].Name_nl;
      this.CategoryName[index] = language;
    }
  }

  filteringCategory() {
    this.poiService.context.subscribe(data => {
      this.PoiList = data;
      for(let cat of this.CategoryPoiList)
      {
        if(this.PoiList.filter(x=> x.Category_id == cat.Id).length == 0)
        {
          this.CategoryNotDelete.push(cat.Id)
        }
      }
      for(let id of this.CategoryNotDelete)
      {        
        this.CategoryPoiList = this.CategoryPoiList.filter(x => x.Id != id)
      }
    })
    this.platform.ready().then(() => 
{
    // get property value
   
    });
  };

  goToLibrary(){
    this.router.navigate(['/library'])
  }
  goToPlantList(){
    this.router.navigate(['plant-list'])
  }

  goToCameras(){
    this.router.navigate(['liste-cameras'])
  }

  goToMap(){
    this.router.navigate(['mapmenu'], {state:{Eventlist: this.PoiList}})
  }


  async openModalPoiDetail(id:number){

      const modal = await this.modalController.create({​​
    
        component: PoiDetailsComponent,
    
        cssClass: 'my-custom-class',
    
        componentProps: {​​ 
          poiId: id,
        }​​
      }​​); 
      return await modal.present();    
  }

  async openModalIntro(){
    const modal = await this.modalController.create({​​
    
      component: ModalIntroComponent,
  
      cssClass: 'my-custom-class',
  
      componentProps: {​​ 
  
      }​​
  
    }​​);
  
    return await modal.present(); 
  }
}
 