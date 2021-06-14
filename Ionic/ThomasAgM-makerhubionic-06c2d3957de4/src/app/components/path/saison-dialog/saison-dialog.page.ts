import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';
import { PlantService } from 'src/app/services/plant.service';
import { AlertDialogPage } from '../alert-dialog/alert-dialog.page';

@Component({
  selector: 'app-saison-dialog',
  templateUrl: './saison-dialog.page.html',
  styleUrls: ['./saison-dialog.page.scss'],
})
export class SaisonDialogPage implements OnInit {
  currentSeason : number;

  constructor(private plantService : PlantService, public dialogRef: MatDialogRef<AlertDialogPage>) { }

  ngOnInit() {
    this.currentSeason = this.plantService.GetCurrentSeason();
  }

  getCurrentSeasonImage() {
    if (this.currentSeason == 0) {
      return 'assets/icon/path/hiver-vert-petit.svg'
    }
    else if (this.currentSeason == 1) {
      return 'assets/icon/path/printemps_vert.svg'
    }
    if (this.currentSeason == 2) {
      return 'assets/icon/path/ete-vert-petit.svg'
    }
    return 'assets/icon/path/automne-vert-petit.svg'
  }

  getCurrentSeasonName() {
    if (this.currentSeason == 0) {
      return 'SeasonDialog.Winter'
    }
    else if (this.currentSeason == 1) {
      return 'SeasonDialog.Spring'
    }
    if (this.currentSeason == 2) {
      return 'SeasonDialog.Summer'
    }
    return 'SeasonDialog.Autumn'
  }

  closeDialog(b:boolean) {
    this.dialogRef.close(b);
  }
}
