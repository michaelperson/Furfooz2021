import { Component, OnInit } from '@angular/core';
import { CamerasService } from 'src/app/services/cameras.service';
import { Cameras } from 'src/app/models/cameras';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-liste-cameras',
  templateUrl: './liste-cameras.page.html',
  styleUrls: ['./liste-cameras.page.scss'],
})
export class ListeCamerasPage implements OnInit {

  ListeCamera: Cameras[];
  selectedLanguage: string;

  constructor(
    private storage: Storage,
    private CamerasService: CamerasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.CamerasService.context.subscribe(data => {
      this.ListeCamera=data;
      
    })
    this.storage.get("selectedLanguages").then( x => {
      if(x)
        this.selectedLanguage = x;
      else
        this.selectedLanguage="fr";
    })
  }

  GetCam(id){
    this.router.navigateByUrl('cameras/' +id);

  }
  
  getName (e: Cameras) : string  {
    return this.selectedLanguage == 'fr' ? e.Nom_Fr : this.selectedLanguage == 'en' ? e.Nom_En : e.Nom_En
  }

}
