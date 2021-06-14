import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { environment } from 'src/environments/environment';

import { Storage } from '@ionic/storage';
import { withModule } from '@angular/core/testing';

declare var window;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  selectedLanguage : string;
  units : string;

  constructor(
      private modalcontroler : ModalController,
      public translate: TranslateService,
      private storage: Storage
    ) { }

  ngOnInit() {

    this.storage.get('selectedLanguages').then((x) => {this.selectedLanguage = x});
    this.storage.get('units').then((x) => {this.units = x});
  }

  close() {
    this.modalcontroler.dismiss();
  }

  setfr() {
    this.translate.use('fr');
    this.storage.set('selectedLanguages','fr').finally(() => {
      window.menu.refreshCatName();
      window.flobette.refreshMenuItem();
    });
  }

  seten() {
    this.translate.use('en');
    this.storage.set('selectedLanguages','en').finally(() => {
      window.menu.refreshCatName();
      window.flobette.refreshMenuItem();
    });
  }

  setnl() {
    this.translate.use('nl');
    this.storage.set('selectedLanguages','nl')
    .finally(() => {
      window.menu.refreshCatName();
      window.flobette.refreshMenuItem();
    });
  }

  switchUnits(units) {
    this.storage.set('units',units)
      .finally(() => {
        window.map.refreshDistance();
      });
  }

  setkm() {
    this.switchUnits('km');
  }

  setml() {
    this.switchUnits('miles');
  }
}
