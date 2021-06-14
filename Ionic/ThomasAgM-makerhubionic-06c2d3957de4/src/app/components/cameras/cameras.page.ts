import { Component, OnInit, Sanitizer, OnDestroy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CamerasService } from 'src/app/services/cameras.service';
import {Cameras} from '../../models/cameras';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'
import {ClipVideoPage} from '../clip-video/clip-video.page'
import { ActivatedRoute, Router } from '@angular/router';
import { poiObject } from 'src/app/models/poi';
import { PointsofinterestService } from 'src/app/services/pointsofinterest.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.page.html',
  styleUrls: ['./cameras.page.scss'],
})
export class CamerasPage implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  selectedLanguage: string;
  Cam:Cameras;
  ImageCamera: string[];
  compteur: number;
  ModalController: ModalController;
  ClipVideoPage: ClipVideoPage;
  CameraId: number;
  poi : poiObject[];
  cameraname : string;


  constructor(
    private sanitizer: DomSanitizer,
    private camerasServices:CamerasService,
    public modalController:ModalController,
    private screenOrientation: ScreenOrientation,
    private route:ActivatedRoute,
    private router:Router,
    private poiservice : PointsofinterestService,

  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    this.compteur = 0;
         
    this.camerasServices.GetCameraById(id).subscribe(data => {
      this.Cam=data;
      this.cameraname = history.state.cameraname

      })
  }
  
  getSafeUrl(url) {
		return  this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}

  clipvideo(id: number){
    this.router.navigate(['clip-video',id]);
  }

  getName (e: Cameras) : string  {
    return this.selectedLanguage == 'fr' ? e.Nom_Fr : this.selectedLanguage == 'en' ? e.Nom_En : e.Nom_Nl
  }

  }

