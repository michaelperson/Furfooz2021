import { Component, OnInit } from '@angular/core';
import { Flobette } from 'src/app/models/flobette';
import { FlobetteServiceService } from 'src/app/services/flobette-service.service';
import { Storage } from '@ionic/storage';

declare var window;

@Component({
  selector: 'app-flobette',
  templateUrl: './flobette.component.html',
  styleUrls: ['./flobette.component.scss']
})
export class FlobetteComponent implements OnInit {

  FlobetteList: Flobette[];
  selectedLanguage : string;
  Menu : Flobette;
  MenuItem : string[] = [];

  constructor(private flobetteS : FlobetteServiceService, private storage: Storage) { 
    window.flobette = this;
  }

  ngOnInit(): void {
    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});
    this.flobetteS.context.subscribe(data => {
      this.FlobetteList = data?.filter(x => { 
        return x
      });
    })
  }

  getName (e: Flobette) : string  {
    return this.selectedLanguage == 'fr' ? e.Name_fr : this.selectedLanguage == 'en' ? e.Name_en : e.Name_nl
  }

  refreshMenuItem() {

    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});

    for (let index = 0; index < this.FlobetteList.length; index++) {
      let language = this.selectedLanguage == 'fr' ? this.FlobetteList[index].Name_fr : this.selectedLanguage == 'en' ? this.FlobetteList[index].Name_en : this.FlobetteList[index].Name_nl;
      this.MenuItem[index] = language;
    }
  }

}
