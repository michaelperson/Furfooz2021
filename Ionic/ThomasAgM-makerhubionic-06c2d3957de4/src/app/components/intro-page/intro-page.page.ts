import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapPage } from '../map/map.page';
import { state } from '@angular/animations';
import { Storage} from '@ionic/storage'
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.page.html',
  styleUrls: ['./intro-page.page.scss'],
})
export class IntroPagePage implements OnInit {
  
rootpage: any;
  constructor(
    private modal:ModalController,
    private storage: Storage,
    private router: Router) {

    

   }


  ngOnInit() {
          this.storage.get('introShown').then((result) => 
          {
              if(result){
                this.router.navigate(['map'])

              }
              else {
                this.storage.set('introShown', true);
              }
      
            });
      
         
        

     
  }
  closeModal(){
    this.modal.dismiss();
  }
}
