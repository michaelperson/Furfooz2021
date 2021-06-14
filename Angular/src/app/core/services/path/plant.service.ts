import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { plantModel } from '../../models/path/plantModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  context : Observable<plantModel[]>;
  baseUrl :string = environment.PATH_API_URI;
  URL : string = environment.PATH_API_URI + "plant/";

  constructor(private http : HttpClient) {
    this.context = new Observable<plantModel[]>(null);
    this.refreshContext();
   }
   
   refreshContext(){
     this.context = this.http.get<plantModel[]>(this.URL);     
   }

   update(model : plantModel){
      return this.http.put<plantModel[]>(this.URL, model)
     .pipe(finalize(() => { this.refreshContext(); }));
   }

   add(model : plantModel){
     return this.http.post<plantModel[]>(this.URL,model).pipe(finalize(() => {
      this.refreshContext()
    }))
   }
   
   get(){
    return this.http.get<plantModel[]>(this.URL);
   }
   getById(id: number){
     return this.http.get<plantModel>(this.URL + id);
   }

   deleteImage(id : number){
    return this.http.put(this.URL+"delete-img/"+id, null)
   }

}