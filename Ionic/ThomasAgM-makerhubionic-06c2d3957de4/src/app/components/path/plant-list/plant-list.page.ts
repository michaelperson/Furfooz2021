import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { PlantModel } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { PlantDetailsComponent } from '../plant-details/plant-details.component';
import { SaisonDialogPage } from '../saison-dialog/saison-dialog.page';
import { LocalisationService } from 'src/app/services/localisation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertDialogPage } from '../alert-dialog/alert-dialog.page';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.page.html',
  styleUrls: ['./plant-list.page.scss'],
})

export class PlantListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  visibleOtherPlant:number;
  between:number ;
  items = [];
  interval;
  listPlant:PlantModel[];
  proxiPlant: PlantModel[];
  otherPlant: PlantModel[];
  selectedSeason : number ;
  selectedCat : number[];
  selectedLanguage : string;
  alreadyAlerted:PlantModel[];
  inProgress: boolean = false;
  alertOn:boolean;
  noMoreData:boolean;
  firstView: boolean;
  cpt: number;
  timer: any;
  inUse: boolean;
  maxTimeToReset: number;
  maxInterval: number;

  constructor(
    protected plantService : PlantService,
    public dialog: MatDialog,
    private modalController: ModalController,
    private localisationService: LocalisationService,
    private detectChangeRef: ChangeDetectorRef,
    private router:Router,
    private storage : Storage,
    private route: ActivatedRoute,
    private notification: LocalNotifications,
    public dialogRef: MatDialogRef<AlertDialogPage>
    )
    { }

  ionViewWillEnter(){
    this.visibleOtherPlant = 8;
  }

  ionViewDidLeave(){
    clearInterval(this.timer);
    this.firstView = false;
    this.inUse = false;
  }

  ngOnInit() { 
    this.maxInterval = 10;
    this.maxTimeToReset = 30;
    this.inUse = false;
    this.cpt = 0;
    this.firstView = false;
    this.selectedSeason = this.plantService.GetCurrentSeason()
    this.between = 0.01;
    this.proxiPlant = [];
    this.otherPlant = [];
    this.listPlant = [];
    this.selectedCat = [1];
    this.alertOn = false;
    this.openDialog();
    this.listPlant = this.route.snapshot.data.resolvePlant.filter(x => x.isDeleted == false)  
    this.otherPlant = this.listPlant;
    this.storage.get("selectedLanguages").then( x => {
      if(x)
        this.selectedLanguage = x;
      else
        this.selectedLanguage="fr";
    })
    this.localisationService.getPositions().subscribe(async data =>{      
      if(!data || this.inProgress) return;
      this.inProgress = true;
      this.proxiPlant = [];
      this.otherPlant = [];
      this.alreadyAlerted = await this.storage.get("alreadyAlerted") || [];
      this.checkPlantList(data);
      await this.storage.set("alreadyAlerted", this.alreadyAlerted);
      this.inProgress = false;
      
      if(!this.firstView)
      {
        this.detectChangeRef.checkNoChanges(); 
        this.firstView = true;   
      }
      else
      {
        if(this.cpt == 0 && !this.inUse)
        {
          this.inUse = true;
          this.startCpt();
        }
        else if(this.cpt >= this.maxInterval && this.inUse)
        {
          this.detectChangeRef.checkNoChanges(); 
          this.cpt = 0;
          this.inUse = false;
          clearInterval(this.timer);
        }
      }
    })
  }

  private startCpt()
  {
   this.timer = setInterval(()=> {
      this.cpt++;
      if(this.cpt >= this.maxTimeToReset)
      {
        clearInterval(this.timer);
        this.cpt = 0;
        this.inUse = false;
      }
    },1000);
  }

  private checkPlantList(data) {
    for (const plant of this.listPlant)                                         
    { 
      if(this.getDistanceBetweenPoints(data, plant.longitude, plant.latitude, 'km') < this.between )
      {    
        if(this.alertOn)
        {
          if(this.alreadyAlerted.find(x => x.id == plant.id) == null && plant.seasons.includes(this.selectedSeason) && this.selectedCat.includes(plant.categoryPlant_id))  
          {        
            this.sendNotification(this.getName(plant));       
            this.alreadyAlerted?.push(plant); 
          }    
        }
        this.proxiPlant.push(plant);            
      }
      else
      {
        this.otherPlant.push(plant);        
      }
    }  
  }
  getProxiPlant(){
      return this.proxiPlant
        .filter(p => p.seasons.includes(this.selectedSeason))
        .filter(x => this.selectedCat.includes(x.categoryPlant_id))
        .sort((a, b) => (a.distance < b.distance ? -1 : 1));
    }

  getOtherPlant(){
    return this.otherPlant   
                .filter(p => p.imageUrl != null)
                .filter(p => p.seasons.includes(this.selectedSeason))
                .filter(x => this.selectedCat.includes(x.categoryPlant_id))
                .sort((a, b) => (a.distance < b.distance ? -1 : 1));
                // .slice(0, this.visibleOtherPlant);   
  }

  getDistanceBetweenPoints(start, targetLong, targetLat, units){
    let earthRadius = {
        miles: 3958.8,
        km: 6371
    };  
    let R = earthRadius[units || 'km'];
    let lat1 = start.lat;
    let lon1 = start.long;
    let lat2 = targetLat;
    let lon2 = targetLong;

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

  changeSeason(seasonNumber: number) {
    this.selectedSeason = seasonNumber;
    this.visibleOtherPlant = 8;
    this.noMoreData = false;
    this.detectChangeRef.detectChanges();
  }

  changeCat(id : number[]) { 
    this.selectedCat = [];
    for (const i of id) {
      this.selectedCat.push(i);        
    }
    this.visibleOtherPlant = 8;
    this.noMoreData = false;
    this.detectChangeRef.detectChanges(); 
  }

async openDetails(id:number){
  const modal = await this.modalController.create({
    component: PlantDetailsComponent,
    cssClass: 'my-custom-class',
    componentProps: { 
      idPlant: id,
      library : false
    }
  });
  return await modal.present();
}

openDialog() {
  this.dialog.open(SaisonDialogPage);
};


openAlertDialog() {
  let dialogRef = this.dialog.open(AlertDialogPage);
  dialogRef.afterClosed().subscribe(result => {
    this.alertOn = result;
  });
};
  
goToLibrary(){
  this.router.navigate(['/library'])
}

getName(p : PlantModel){
    return this.selectedLanguage == "nl" && p.name_nl ? p.name_nl : this.selectedLanguage == "en" && p.name_en? p.name_en : this.selectedLanguage == "fr" && p.name_fr ? p.name_fr : p.name_la;
}

doRefresh(event){
  setTimeout(() => {
    this.visibleOtherPlant +=4;
    this.noMoreData = this.otherPlant   
      .filter(p => p.imageUrl != null)
      .filter(p => p.seasons.includes(this.selectedSeason))
      .filter(x => this.selectedCat.includes(x.categoryPlant_id)).length >= this.visibleOtherPlant ? false : true;
    if(!this.noMoreData)
    {
      let i = document.getElementById('divAllList').classList.remove('addPadding');
    }
    else
    {
      let i = document.getElementById('divAllList').classList.add('addPadding');
    }
    event.target.complete();
  }, 500)
}

sendNotification(name:string){
  this.notification.schedule({
    id: 1,
    text: this.selectedLanguage == "fr" ? "Vous êtes proches de "+ name : this.selectedLanguage == "en" ? "You are close to " + name : "U bent dichtbij " + name,
  })
}
}