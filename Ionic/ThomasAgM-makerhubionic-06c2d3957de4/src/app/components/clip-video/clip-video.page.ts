import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { clipVideo } from 'src/app/models/clipVideo';
import { ClipVideoService } from 'src/app/services/clip-video.service';
import {Cameras} from '../../models/cameras'
import { ActivatedRoute, Router } from '@angular/router';
import { CamerasService } from 'src/app/services/cameras.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-clip-video',
  templateUrl: './clip-video.page.html',
  styleUrls: ['./clip-video.page.scss'],
})
export class ClipVideoPage implements OnInit {
  ListClipsVideo:clipVideo[];
  ImageCamera: string[];
  compteur: number;
  Clip:clipVideo[];
  CameraId: number;
  data: any;
  selectedLanguage: string;

  constructor( 
    private CamerasService: CamerasService,
    private sanitizer: DomSanitizer,
    private ClipVideoServices:ClipVideoService,
    private route: ActivatedRoute,
    private router:Router,
    private storage: Storage
  ) { 

  }
  id;
  ngOnInit() {
    this.compteur = 0;
    this.id = this.route.snapshot.params.id;
    this.ClipVideoServices.GetCameraById(this.id).subscribe(data => {
      this.ListClipsVideo=data;
      })

      this.storage.get("selectedLanguages").then( x => {
        if(x)
          this.selectedLanguage = x;
        else
          this.selectedLanguage="fr";
      })
  }

  next(){
    this.compteur = (this.compteur + 1) % this.ListClipsVideo.length;
  }
  prev(){
    this.compteur = (this.compteur - 1 + this.ListClipsVideo.length) % this.ListClipsVideo.length;
  }

  getSafeUrl(url) {
		return  this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}

  Camera(id: number){
    this.router.navigate(['cameras',id]);
  }
  
  getName (e: clipVideo ) : string  {
    return this.selectedLanguage == 'fr' ? e.Nom_Fr : this.selectedLanguage == 'en' ? e.Nom_En : e.Nom_Nl
  }

  

}
