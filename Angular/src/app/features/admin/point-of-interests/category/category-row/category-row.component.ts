import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trim } from 'jquery';
import { CategoryModel } from 'src/app/core/models/point-of-interests/category.model';
import { CategoryService } from 'src/app/core/services/point-of-interests/category.service';
import { ToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'tr [app-category-row]',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

  editMode: boolean;

  oldValues: CategoryModel;

  colors:string[] = ['Blue','LightBlue','Red', 'pink', 'Orange', 'Green', 'LightGreen','Yellow']

  selectTemplate = (state) => {
    if(!state.id)
      return state.text;
    return $(`<span><span style="display:inline-block;width:10px;height:10px;background-color: ${state.text}"></span> ${state.text}</span>`);
  }

  selectOptions: any = {
    templateResult: this.selectTemplate,
    templateSelection: this.selectTemplate
  };

  private _model: CategoryModel;

  @Input()
  set model(v :CategoryModel) {
    if(v){
      this.oldValues = v;
      this._model = v;
    }
  }

  get model(): CategoryModel {
    return this._model;
  }

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit(): void {
    this.editMode = this.model == null;
    if(!this.model)
      this.initModel();
  }

  initModel() {
    this.model = { Name_fr: null, Name_nl: null, Name_en: null, IsDeleted: false, PinColor: null }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  isValid() {
    return trim(this.model.Name_fr) && this.model.IsDeleted != null;
  }

  disable(id: number) {
    this.categoryService.delete(id).subscribe(data => {
      this.toastr.success('Operation OK');
    }, error => {
      this.toastr.error('Operation KO');
    });
  }

  submit() {
    if(!this.isValid) return;
    if(!this.model.Id) {
      this.categoryService.add(this.model).subscribe(data => {
        this.initModel();
        this.toastr.success('Operation OK');
      }, error => {
        this.toastr.error('Operation KO');
      });
    }
    else{
      this.categoryService.edit(this.model).subscribe(data => {
        this.oldValues = this.model;
        this.editMode = false;
        this.toastr.success('Operation OK');
      }, error => {
        this.model = this.oldValues;
        this.toastr.error('Operation OK');
      });
    }
  }

}
