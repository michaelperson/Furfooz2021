import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cameras } from '../models/cameras';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  url: string = environment.API_PLANT_IMG + "cameras";

  context:BehaviorSubject<Cameras[]>

  constructor(private http : HttpClient)
   { 
    this.context = new BehaviorSubject<Cameras[]>([]);
    this.refresh();
   }
   refresh(){
    this.http.get<Cameras[]>(this.url).subscribe(data=> 
      {this.context.next(data)});
   }
   GetCameraById(id: number){
    return this.http.get<Cameras>(this.url+"/"+ id);
  }
  GetAllCameras(){
    return this.http.get<Cameras[]>(this.url)

  }

}
