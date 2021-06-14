import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CamerasModel } from 'src/app/core/models/nichoir/camera.model';
import {CameraServices} from 'src/app/core/services/nichoir/camera.service'

@Component({
  templateUrl: './cameras-delete.component.html',
  styleUrls: ['./cameras-delete.component.scss']
})


export class CamerasDeleteComponent implements OnInit {
  idString:string;
  id:number;
  constructor(
    
    private router:Router,private dialogServices : MatDialogRef<CamerasDeleteComponent>,@Inject(MAT_DIALOG_DATA) public Camera:CamerasModel, private _snackBar: MatSnackBar,private _Activatedroute: ActivatedRoute,
    private CameraService :CameraServices,private dialog : MatDialog) { 
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
    
    this.CameraService.delete(this.Camera.Id).subscribe(data=>{
      
      this._snackBar.open("camera supprimée","✔️",{
        duration:3000,
        panelClass:'snackBar'
      });
      this.dialogServices.close();
      this.CameraService.refresh();
    })
      
    }
    catch
        {
         this._snackBar.open("Une erreur inattendue, veuillez contacter votre technicien");
         this.dialogServices.close();
        }
      }

}
