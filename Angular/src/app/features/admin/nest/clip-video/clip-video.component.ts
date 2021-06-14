import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ClipVideoModel } from 'src/app/core/models/nichoir/clipVideo.model';
import { CameraServices } from 'src/app/core/services/nichoir/camera.service';
import { ClipVideoService } from 'src/app/core/services/nichoir/clip-video.service';
import { ClipVideoAddComponent } from './clip-video-add/clip-video-add.component';
import { ClipVideoDeleteComponent } from './clip-video-delete/clip-video-delete.component';
import { ClipvideoDetailComponent } from './clipvideo-detail/clipvideo-detail.component';



@Component({
  selector: 'app-clip-video',
  templateUrl: './clip-video.component.html',
  styleUrls: ['./clip-video.component.scss']
})
export class ClipVideoComponent implements OnInit {
idString:string;
id:number;
nomcamera:string;

cameraId:number;
ClipVideo:ClipVideoModel;
  dataArray :ClipVideoModel[]=[];
  displayedColumns: string[] = ['Id','Lien', 'Nom_Fr','Nom_En','Nom_Nl','LienImg', 'Detail','EstAffiche','Camera_Id','Bouton'];
  dataSource = new MatTableDataSource(this.dataArray);

  constructor(private _Activatedroute: ActivatedRoute,private Cameraservice:CameraServices,
    private ClipVideoServices :ClipVideoService,private dialog : MatDialog) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.idString = params.get('id'); 
      this.id=Number(this.idString);

  });
  }

  ngOnInit(): void {
    this.ClipVideoServices.refresh(this.id).subscribe(data => {     
      this.dataArray=data;
      this.dataSource=new MatTableDataSource(this.dataArray);    
    });
    this.Cameraservice.getDetails(this.id).subscribe(data=>{
      this.nomcamera=data.Nom_Fr;
    });
  }

  openDetail(id:number){
     this.ClipVideoServices.getDetails(id).subscribe(data =>{
       let dialogRef =this.dialog.open(ClipvideoDetailComponent, {data,disableClose:true});
       dialogRef.afterClosed().subscribe(()=>{
         this.ClipVideoServices.refresh(this.id).subscribe(data => {
           this.dataArray=data;
           this.dataSource=new MatTableDataSource(this.dataArray);
         });
       });
     })
   
  }

  addCamera(){
     let dialogRef = this.dialog.open(ClipVideoAddComponent,{data:{id:this.id},disableClose:true});
     dialogRef.afterClosed().subscribe(()=>{
       this.ClipVideoServices.refresh(this.id).subscribe(data => {
         this.dataArray=data;
         this.dataSource=new MatTableDataSource(this.dataArray);
       });
     });

     
  }

  

}
