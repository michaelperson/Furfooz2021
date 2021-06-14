import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ClipVideoModel } from 'src/app/core/models/nichoir/clipVideo.model';
import { ClipVideoService } from 'src/app/core/services/nichoir/clip-video.service';
import { ClipVideoDeleteComponent } from '../clip-video-delete/clip-video-delete.component';

@Component({
  selector: 'app-clipvideo-detail',
  templateUrl: './clipvideo-detail.component.html',
  styleUrls: ['./clipvideo-detail.component.scss']
})
export class ClipvideoDetailComponent implements OnInit {
  formDetail:FormGroup;
  id:number;
  dataArray :ClipVideoModel[]=[];
  dataSource = new MatTableDataSource(this.dataArray);

  constructor(private dialogServices : MatDialogRef<ClipvideoDetailComponent>,@Inject(MAT_DIALOG_DATA) public ClipVideo:ClipVideoModel,
  private ClipVideoService:ClipVideoService,private dialog : MatDialog,private ClipVideoServices :ClipVideoService,
   private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {

    this.dialogServices.keydownEvents().subscribe(event=>{
      if(event.key === "Escape"){
        this.Close();
      }
    });
    this.formDetail=new FormGroup({
      'Id':new FormControl(this.ClipVideo.Id,Validators.compose([
      ])),
      'Lien':new FormControl(this.ClipVideo.Lien,Validators.compose([
      ])),
      'Nom_Fr':new FormControl(this.ClipVideo.Nom_Fr,Validators.compose([
      ])),
      'Nom_En':new FormControl(this.ClipVideo.Nom_En,Validators.compose([
      ])),
      'Nom_Nl':new FormControl(this.ClipVideo.Nom_Nl,Validators.compose([
      ])),
      'Detail':new FormControl(this.ClipVideo.Detail,Validators.compose([ 
      ])),
      'EstAffiche':new FormControl(this.ClipVideo.EstAffiche,Validators.compose([ 
      ])),
      'LienImg':new FormControl(this.ClipVideo.LienImg,Validators.compose([ 
      ])),
      'Camera_Id':new FormControl(this.ClipVideo.Camera_Id,Validators.compose([ 
      ])),
    })
  }
  Close(){
    this.dialogServices.close();
    };
    supp(){
       let dialogRef = this.dialog.open(ClipVideoDeleteComponent,{data:this.ClipVideo,disableClose:true}); 
         dialogRef.afterClosed().subscribe(()=>{
           this.ClipVideoService.refresh(this.ClipVideo.Camera_Id);
           this.dialog.closeAll();
         })
    }
    onFormSubmit(formDirective: FormGroupDirective){
      console.log(this.formDetail.value)
      if(this.formDetail.valid){
        this.ClipVideoService.update(this.formDetail.value).subscribe(data=>{
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
}
