import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipVideoService } from 'src/app/core/services/nichoir/clip-video.service';

@Component({
  selector: 'app-clip-video-add',
  templateUrl: './clip-video-add.component.html',
  styleUrls: ['./clip-video-add.component.scss']
})
export class ClipVideoAddComponent implements OnInit {

  formDetail:FormGroup;

  constructor(private dialogServices : MatDialogRef<ClipVideoAddComponent>,
    private ClipVideoService:ClipVideoService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { } 

  ngOnInit(): void {
    this.dialogServices.keydownEvents().subscribe(event=>{
      if(event.key === "Escape"){
        this.Close();
      }
    });


    
    
    this.formDetail=new FormGroup({
      'Lien':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'Nom_Fr':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'Nom_En':new FormControl(null,Validators.compose([  
      ])),
      'Nom_Nl':new FormControl(null,Validators.compose([ 
      ])),
      'Lienimg':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'Detail':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'EstAffiche':new FormControl(null,Validators.compose([ 
        Validators.required  
      ])),
      'Camera_Id':new FormControl(this.data.id,Validators.compose([ 
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

      this.ClipVideoService.addCamera(this.formDetail.value).subscribe(data=>{
        this.ClipVideoService;
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
