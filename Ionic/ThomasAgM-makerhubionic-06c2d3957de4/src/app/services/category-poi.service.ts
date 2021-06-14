import { Injectable } from '@angular/core';
import { CategoryPoi } from '../models/categoryPoi';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryPoiService {
  

  url: string = environment.API_PLANT_IMG + "category";

  context:BehaviorSubject<CategoryPoi[]>;

  constructor(private client : HttpClient) 
  {
    this.context = new BehaviorSubject<CategoryPoi[]>([]);
    this.refresh();
  }

  refresh() {
    this.client.get<CategoryPoi[]>(this.url)
    .pipe(map((x) => {
      return x.filter(y => y.IsDeleted != true);
    }))
    .subscribe(data => this.context.next(data),error => this.context.error(error));
  }
}
