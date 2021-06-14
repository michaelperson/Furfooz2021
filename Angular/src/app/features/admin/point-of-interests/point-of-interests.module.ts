import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointOfInterestsRoutingModule } from './point-of-interests-routing.module';
import { PointOfInterestsComponent } from './point-of-interests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelect2Module } from 'ng-select2';
import { PoiFormComponent } from './components/poi-form/poi-form.component';
import { CategoryRowComponent } from './category/category-row/category-row.component';


@NgModule({
  declarations: [PointOfInterestsComponent, IndexComponent, AddComponent, CategoryComponent, PoiFormComponent, CategoryRowComponent],
  imports: [
    CommonModule,
    SharedModule,
    PointOfInterestsRoutingModule,
    FormsModule,
    NgSelect2Module,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class PointOfInterestsModule { }
