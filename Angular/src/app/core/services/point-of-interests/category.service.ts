import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'tinymce';
import { CategoryModel } from '../../models/point-of-interests/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  context$: BehaviorSubject<CategoryModel[]>

  constructor(
    private http: HttpClient
  ) { 
    this.context$ = new BehaviorSubject<CategoryModel[]>([]);
    this.refresh();
  }

  refresh(){
    this.http.get<CategoryModel[]>(environment.BASE_API_URI + 'category').subscribe(data => {
      this.context$.next(data);
    });
  }

  add(model: CategoryModel) {
    return this.http.post(environment.BASE_API_URI + 'category', model).pipe(finalize(() => {
      this.refresh();
    }))
  }

  edit(model: CategoryModel) {
    return this.http.put(environment.BASE_API_URI + 'category', model).pipe(finalize(() => {
      this.refresh();
    }))
  }

  delete(id: number) {
    return this.http.delete(environment.BASE_API_URI + 'category/' + id).pipe(finalize(() => {
      this.refresh();
    }))
  }
}
