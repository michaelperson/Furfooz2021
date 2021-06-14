import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipVideoModel } from 'src/app/core/models/nichoir/clipVideo.model';
import { ClipVideoService } from 'src/app/core/services/nichoir/clip-video.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { ClipVideoComponent } from '../clip-video.component';




@Component({
  selector: 'app-clip-video-delete',
  templateUrl: './clip-video-delete.component.html',
  styleUrls: ['./clip-video-delete.component.scss']
})
export class ClipVideoDeleteComponent implements OnInit {
idString:string;
id:number;

  constructor(private router:Router,private dialogServices : MatDialogRef<ClipVideoDeleteComponent>,@Inject(MAT_DIALOG_DATA) public Clip:ClipVideoModel, private _snackBar: MatSnackBar,private _Activatedroute: ActivatedRoute,
    private ClipVideoService :ClipVideoService,private dialog : MatDialog) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.idString = params.get('id'); 
      this.id=Number(this.idString);  
  });
  }

  Close(){
    this.dialogServices.close();
    };

  ngOnInit(): void {
  }
  
  deleteclip(){
    try{
    this.ClipVideoService.delete(this.Clip.Id).subscribe(data=>{
      this._snackBar.open("clip supprimée","✔️",{
        duration:3000,
        panelClass:'snackBar'
      });
      this.dialogServices.close();
      this.ClipVideoService.refresh(this.Clip.Camera_Id);
    })
    }
    catch
        {
         this._snackBar.open("Une erreur inattendue, veuillez contacter votre technicien");
         this.dialogServices.close();
        }
      }
}

