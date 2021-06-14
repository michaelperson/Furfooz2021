import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ModalController } from '@ionic/angular';
import { poiObject } from 'src/app/models/poi';
import { PlantService } from 'src/app/services/plant.service';
import { Storage } from '@ionic/storage';
import { PointsofinterestService } from 'src/app/services/pointsofinterest.service';
import { PlantModel } from 'src/app/models/plant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poi-details',
  templateUrl: './poi-details.component.html',
  styleUrls: ['./poi-details.component.scss']
})
export class PoiDetailsComponent implements OnInit {
  codeLanguage : string;
  savedList : poiObject[];
  poiId;
  library;
  poi : poiObject;

  selectedLanguage:string;
  listPoI:poiObject[];

  
  constructor(
    public modal:ModalController,
    protected poiService : PointsofinterestService,
    private tts: TextToSpeech,
    private storage:Storage,
    private route : Router
    ) { }
    
  numberOfDescriptionListen:number;
  vocalOn:boolean;

  ngOnInit(): void {
    this.storage.get("selectedLanguages").then(x => {
      if(x)
        this.selectedLanguage = x
      else
        this.selectedLanguage = "fr"
    })
    
  }

  ionViewWillEnter() {
    this.vocalOn = false;
    this.numberOfDescriptionListen = 1
    this.poiService.getById(this.poiId).subscribe(data =>{
      this.poi = data; 
      this.storage.get("savedPoI").then( x => {
        this.savedList = x || [];
        this.poi.isSaved = this.savedList.find(s => s.Id === this.poiId) !== undefined;
      });
    }) 
    this.getLanguages();    
  }

  getName(p : poiObject){
    if(p)
      return this.selectedLanguage == "nl" ? p.Name_nl : this.selectedLanguage == "en" ? p.Name_en : p.Name_fr;
}

  close(){
    this.tts.speak("");
    if(this.library == true){
      this.route.navigate(['library']);
      this.modal.dismiss();
    }
    else {
      this.modal.dismiss();
    }
  }
  
  readDescription(poi:poiObject, code:string){
    this.vocalOn = true;    
      this.tts.speak({
        text: code == "en-EN" ? poi.Description_en 
            : code == "nl-NL" ? poi.Description_nl
            : code == "fr-FR" ? poi.Description_fr : "",
        locale: code,
        rate: 0.90
      }).then(()=>this.vocalOn = false);  
  }

  stopVocal(){
    this.vocalOn = false;
    this.tts.speak("");
  }

  getLanguages(){
    this.storage.get('selectedLanguages').then((x) => {
      this.selectedLanguage = x;
      if(this.selectedLanguage != null)
        this.selectedLanguage = x;
      else
        this.selectedLanguage = "fr"
        this.codeLanguage = this.selectedLanguage == "en" ? "en-EN" : this.selectedLanguage == "nl" ? "nl-NL" : "fr-FR";    
    })   
  }

  saveData(poi : poiObject){
    if(poi){
      poi.isSaved = true;
      this.savedList.push(poi)
      this.storage.set("savedPoI", this.savedList)
    }
  }

  getDescription (e: poiObject) : string  {
    return this.selectedLanguage == 'fr' ? e?.Description_fr : this.selectedLanguage == 'en' ? e?.Description_en : e?.Description_nl
  }

  deleteFromPoiList(id : number){
    this.savedList = this.savedList.filter(x => x.Id != id);
    this.storage.set("savedPoI", this.savedList);
    if(this.library == true){
      this.route.navigate(['library']);
      this.modal.dismiss();
    }
    else {
      this.poi.isSaved = false;
    }
  }
}
