import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryModel } from 'src/app/core/models/point-of-interests/category.model';
import { CategoryService } from 'src/app/core/services/point-of-interests/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: CategoryModel[]

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.context$.subscribe(data => {
      this.categories = data;
    });
  }
}
