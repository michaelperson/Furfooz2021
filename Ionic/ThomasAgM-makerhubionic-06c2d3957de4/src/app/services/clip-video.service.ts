import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { clipVideo } from '../models/clipVideo';

@Injectable({
  providedIn: 'root'
})
export class ClipVideoService {

  url: string = environment.API_PLANT_IMG + "ClipVideo";

  context:BehaviorSubject<clipVideo[]>

  constructor(private http : HttpClient)
   { 
    this.context = new BehaviorSubject<clipVideo[]>([]);
    this.refresh();
   }
   refresh(){
    this.http.get<clipVideo[]>(this.url).subscribe(data=> 
      {this.context.next(data)});
   }
   GetCameraById(id: number){
     return this.http.get<clipVideo[]>(this.url+ "/CameraId/" + id);
   }

  
}
