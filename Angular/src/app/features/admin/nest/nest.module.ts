import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestRoutingModule } from './nest-routing.module';
import { NestComponent } from './nest.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { CamerasDetailComponent } from './cameras-detail/cameras-detail.component';
import { MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CameraAddComponent } from './camera-add/camera-add.component';
import { ClipVideoComponent } from './clip-video/clip-video.component';
import { ClipvideoDetailComponent } from './clip-video/clipvideo-detail/clipvideo-detail.component';
import {MatRadioModule} from '@angular/material/radio';
import { ClipVideoAddComponent } from './clip-video/clip-video-add/clip-video-add.component';
import { ClipVideoDeleteComponent } from './clip-video/clip-video-delete/clip-video-delete.component';
import { CamerasDeleteComponent } from './cameras-detail/cameras-delete/cameras-delete.component';



@NgModule({
  declarations: [NestComponent, CamerasDetailComponent, CameraAddComponent, ClipVideoComponent, ClipvideoDetailComponent, ClipVideoAddComponent, ClipVideoDeleteComponent, CamerasDeleteComponent],
  imports: [
    CommonModule,
    SharedModule,
    NestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule, 
    
        
  ]
})
export class NestModule { }
