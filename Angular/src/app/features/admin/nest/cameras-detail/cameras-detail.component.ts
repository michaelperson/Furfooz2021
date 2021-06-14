import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators,FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CamerasModel } from 'src/app/core/models/nichoir/camera.model';
import { CameraServices } from 'src/app/core/services/nichoir/camera.service';
import { CamerasDeleteComponent } from './cameras-delete/cameras-delete.component';


@Component({
  selector: 'app-cameras-detail',
  templateUrl: './cameras-detail.component.html',
  styleUrls: ['./cameras-detail.component.scss']
})
export class CamerasDetailComponent implements OnInit {
  
  formDetail:FormGroup;


  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('true');
  constructor(private dialogServices : MatDialogRef<CamerasDetailComponent>,@Inject(MAT_DIALOG_DATA) public Camera:CamerasModel,
              private CameraServices:CameraServices,
               private _snackBar: MatSnackBar,
               private dialog : MatDialog,
               fb:FormBuilder

            ) {  }

  ngOnInit(): void {
  
      // console.log(this.Camera);

    this.dialogServices.keydownEvents().subscribe(event=>{
      if(event.key === "Escape"){
        this.Close();
      }
    });
    this.formDetail=new FormGroup({
      'Id':new FormControl(this.Camera.Id,Validators.compose([
      ])),
      'Nom_Fr':new FormControl(this.Camera.Nom_Fr,Validators.compose([ 
        Validators.required  
      ])),
      'Nom_En':new FormControl(this.Camera.Nom_En,Validators.compose([ 
      ])),
      'Nom_Nl':new FormControl(this.Camera.Nom_Nl,Validators.compose([ 
      ])),
      'Emplacement':new FormControl(this.Camera.Emplacement,Validators.compose([ 
        Validators.required  
      ])),
      'EstActif':new FormControl(this.Camera.EstActif,Validators.compose([ 
        Validators.required  
      ])),
      'LienImg':new FormControl(this.Camera.LienImg,Validators.compose([ 
      ])),

    })
  }
  Close(){
  this.dialogServices.close();
  };
  
  

  onFormSubmit(formDirective: FormGroupDirective){
    if(this.formDetail.valid){
      this.CameraServices.update(this.formDetail.value).subscribe(data=>{
        this.CameraServices.refresh();
         this._snackBar.open("Sauvegarde Effectuée","✔️",{
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

  supp(){
    console.log(this.Camera.Id);

    
     let dialogRef = this.dialog.open(CamerasDeleteComponent,{data:this.Camera,disableClose:true}); 
       dialogRef.afterClosed().subscribe(()=>{
         this.CameraServices.refresh();
         this.dialog.closeAll();
       })
  }

}
