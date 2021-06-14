import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/core/models/point-of-interests/category.model';
import { PointOfInterestsModel } from 'src/app/core/models/point-of-interests/point-of-interests.model';
import { CategoryService } from 'src/app/core/services/point-of-interests/category.service';
import { PointOfInterestsService } from 'src/app/core/services/point-of-interests/point-of-interests.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
   
  selectTemplate = (state) => {
    if(!state.id)
      return state.text;
    let item = this.categories.find(x => x.Id == state.id);
    return $(`<span><span style="display:inline-block;width:10px;height:10px;background-color: ${item.PinColor}"></span> ${item.Name_fr}</span>`);
  }

  selectMultipleOptions: any = {
    multiple: true,
    templateResult: this.selectTemplate,
    templateSelection: this.selectTemplate,
  };


  categories: CategoryModel[];

  pointOfInterests: PointOfInterestsModel[];

  set selectedPoiId(value: number) {
    if(value) {
      this.selectedPoi = this.poiService.context$.value.find(x => x.Id == value);
    }
  }

  selectedPoi: PointOfInterestsModel;

  set selectedCategories(ids:number[]) {
    if(ids?.length) {
      this.pointOfInterests = this.poiService.context$.value.filter(x => ids.find(id => x.Category_id == id));
    }
  }

  constructor(
    private categoryService: CategoryService,
    private poiService: PointOfInterestsService,
  ) { }

  ngOnInit(): void {
    this.categoryService.context$.subscribe(data => {
      this.categories = data;
    });
  }
}
