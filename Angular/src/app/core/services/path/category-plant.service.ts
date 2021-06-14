import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { categoryModel } from '../../models/path/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryPlantService {

  context : BehaviorSubject<categoryModel[]>;
  URL : string = environment.PATH_API_URI + "categoryPlant/";

  constructor(private http : HttpClient) {
    this.context = new BehaviorSubject<categoryModel[]>([]);
    this.refreshContext();
   }

   refreshContext(){
    this.http.get<categoryModel[]>(this.URL).subscribe( x => {
      this.context.next(x)
    });
  }
}
