import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathRoutingModule } from './path-routing.module';
import { PathComponent } from './path.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddComponent } from './add/add.component';
import { PlantFormComponent } from './components/plant-form/plant-form.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { IndexComponent } from './index/index.component';
import { DataTablesModule } from 'angular-datatables';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [PathComponent, AddComponent, PlantFormComponent, IndexComponent, UpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    PathRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    DataTablesModule
  ]
})
export class PathModule { }
