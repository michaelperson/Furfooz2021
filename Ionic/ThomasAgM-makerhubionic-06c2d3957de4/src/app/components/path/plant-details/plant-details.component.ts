import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { PlantModel } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {
  idPlant;
  library;
  plant:PlantModel;
  selectedLanguage:string;
  savedList : PlantModel[];
  codeLanguage:string;
  vocalOn:boolean;
  numberOfDescriptionListen:number;
  descriptionHere:boolean;

  constructor(
    public modal:ModalController,
    protected plantService : PlantService,
    private tts: TextToSpeech,
    private storage:Storage,
    private route : Router
    
  ) { }

  ionViewWillEnter(){  
    this.vocalOn = false;
    this.plantService.getById(this.idPlant).subscribe(data =>{
      this.plant = data; 
      this.storage.get("savedPlant").then( x => {
        this.savedList = x || [];
        this.plant.isSaved = this.savedList.find(s => s.id === this.idPlant) !== undefined;
      });
    }) 
    this.getLanguages();
  }
  ngOnInit(): void { 
    this.storage.get("selectedLanguages").then( x =>{
      if(x)
        this.selectedLanguage = x;
      else
        this.selectedLanguage = "fr"
    });
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
  getName(p : PlantModel){
    if(p)
    return this.selectedLanguage == "nl" && p.name_nl ? p.name_nl : this.selectedLanguage == "en" && p.name_en? p.name_en : this.selectedLanguage == "fr" && p.name_fr ? p.name_fr : p.name_la;
  }

  getDescription1(p : PlantModel){
   return this.selectedLanguage == "nl" && p.description1_nl ? p.description1_nl : this.selectedLanguage == "en" && p.description1_en ? p.description1_en : this.selectedLanguage == "fr" && p.description1_fr ? p.description1_fr : "";
  }

  getDescription2(p : PlantModel){
   return this.selectedLanguage == "nl" && p.description2_nl ? p.description2_nl : this.selectedLanguage == "en" && p.description2_en ? p.description2_en : this.selectedLanguage == "fr" && p.description2_fr ? p.description2_fr : "";
  }

  getDescription3(p : PlantModel){
   return this.selectedLanguage == "nl" && p.description3_nl ? p.description3_nl : this.selectedLanguage == "en" && p.description3_en ? p.description3_en : this.selectedLanguage == "fr" && p.description3_fr ? p.description3_fr : "";
  }

  saveData(p : PlantModel){
    if(p){
      p.isSaved = true;
      this.savedList.push(p)
      this.storage.set("savedPlant", this.savedList)
    }
  }

  readDescription(plant:PlantModel, code:string){
    this.vocalOn = true;   
      this.tts.speak({
        text: (code == "en-EN" && plant.description1_en != "") ? plant.description1_en  
            : (code == "nl-NL" && plant.description1_nl != "") ? plant.description1_nl
            : (code == "fr-FR" && plant.description1_fr != "") ? plant.description1_fr : "",
        locale: code,
        rate: 0.90
        }).then(() =>{
          this.tts.speak({
            text: (code == "en-EN" && plant.description2_en != "") ? plant.description2_en  
                : (code == "nl-NL" && plant.description2_nl != "") ? plant.description2_nl
                : (code == "fr-FR" && plant.description2_fr != "") ? plant.description2_fr : "",
            locale: code,
            rate: 0.90
        }).then(() =>{
          this.tts.speak({
            text: (code == "en-EN" && plant.description3_en != "") ? plant.description3_en  
                : (code == "nl-NL" && plant.description3_nl != "") ? plant.description3_nl
                : (code == "fr-FR" && plant.description3_fr != "") ? plant.description3_fr : "",
            locale: code,
            rate: 0.90
            })
          })
        .then(() => {
          this.vocalOn = false;        
        })
        .catch((reason: any) => console.log(reason));
    })
  }


  stopVocal(){
    this.numberOfDescriptionListen = 1;
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

  deleteFromList(id : number){
    this.savedList = this.savedList.filter(x => x.id != id);
    this.storage.set("savedPlant", this.savedList);
    if(this.library == true){
      this.route.navigate(['library']);
      this.modal.dismiss();
    }
    else {
      this.plant.isSaved = false;
    }
  }
}
