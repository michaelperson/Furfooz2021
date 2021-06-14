import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CameraServices } from 'src/app/core/services/nichoir/camera.service';

@Component({
  selector: 'app-camera-add',
  templateUrl: './camera-add.component.html',
  styleUrls: ['./camera-add.component.scss']
})
export class CameraAddComponent implements OnInit {
  
  formDetail:FormGroup;
  
  constructor(private dialogServices : MatDialogRef<CameraAddComponent>,
              private CameraServices:CameraServices,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dialogServices.keydownEvents().subscribe(event=>{
      if(event.key === "Escape"){
        this.Close();
      }
    });

    this.formDetail=new FormGroup({
      // 'Id':new FormControl(null,Validators.compose([
      // ])),
      'Nom_Fr':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'Nom_En':new FormControl(null,Validators.compose([ 
      ])),
      'Nom_Nl':new FormControl(null,Validators.compose([ 

      ])),
      'Emplacement':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'EstActif':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'Lienimg':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      

    })
  }

  Close(){
    this.dialogServices.close();
  } 


  onFormSubmit(formDirective: FormGroupDirective){
    console.log(this.formDetail.value)
    if(this.formDetail.valid){

      this.CameraServices.addCamera(this.formDetail.value).subscribe(data=>{
        this.CameraServices.refresh();
        console.log(this.formDetail.value);
         this._snackBar.open("Caméra ajoutée","✔️",{
           duration: 3000,
           panelClass:'snackBar'
         });
        this.dialogServices.close();
      },error => {
       this._snackBar.open("Une erreur inattendue, veuillez contacter votre technicien");

      })
    }
    else{
       this._snackBar.open("Erreur veuillez completer le formulaire correctement");
    }
    
  }
}
