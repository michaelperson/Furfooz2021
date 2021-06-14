import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-intro',
  templateUrl: './modal-intro.component.html',
  styleUrls: ['./modal-intro.component.css']
})
export class ModalIntroComponent implements OnInit {
  selectedLanguage:string;
  constructor(private modal:ModalController, private storage: Storage,public translate: TranslateService) { }

  ngOnInit(): void {
    
  }

  closeModal(){
    this.modal.dismiss();
    this.storage.set("introShown", true);
  }

  setLanguages(l:string){
    this.storage.set('selectedLanguages', l).finally(() => {
      this.selectedLanguage = l;
      this.translate.use(l)
    }); 
    if(l == 'fr')
    {
      document.getElementById('fr').classList.add('green')     
      document.getElementById('nl').classList.remove('green')     
      document.getElementById('en').classList.remove('green')     
    }
    else if(l == 'nl')
    {
      document.getElementById('nl').classList.add('green')
      document.getElementById('fr').classList.remove('green')     
      document.getElementById('en').classList.remove('green') 
    }
    else if(l == 'en')
    {
      document.getElementById('en').classList.add('green')
      document.getElementById('nl').classList.remove('green')     
      document.getElementById('fr').classList.remove('green') 
    }
  }
}
