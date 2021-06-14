import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CamerasModel } from 'src/app/core/models/nichoir/camera.model';
import { CameraServices } from 'src/app/core/services/nichoir/camera.service';
import{MatDialog} from '@angular/material/dialog'
import { CamerasDetailComponent } from './cameras-detail/cameras-detail.component';
import { CameraAddComponent } from './camera-add/camera-add.component';


@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.scss']
})



export class NestComponent implements OnInit {
  Camera:CamerasModel;
  dataArray :CamerasModel[]=[];
  displayedColumns: string[] = ['Id', 'Nom_Fr','Nom_En','Nom_Nl','LienImg', 'Emplacement', 'EstActif','Bouton'];
  dataSource = new MatTableDataSource(this.dataArray);
  
  constructor(private CameraServices :CameraServices,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.CameraServices.refresh().subscribe(data => {
      this.dataArray=data;
      this.dataSource=new MatTableDataSource(this.dataArray);
    });
  }

  openDetail(id:number){
    this.CameraServices.getDetails(id).subscribe(data =>{
      let dialogRef =this.dialog.open(CamerasDetailComponent, {data,disableClose:true});
      dialogRef.afterClosed().subscribe(()=>{
        this.CameraServices.refresh().subscribe(data => {
          this.dataArray=data;
          this.dataSource=new MatTableDataSource(this.dataArray);
        });
      });
    })
   
  }

  addCamera(){
    let dialogRef = this.dialog.open(CameraAddComponent,{disableClose:true});
    dialogRef.afterClosed().subscribe(()=>{
      this.CameraServices.refresh().subscribe(data => {
        this.dataArray=data;
        this.dataSource=new MatTableDataSource(this.dataArray);
      });
    });

  }
}
