import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CamerasModel } from '../../models/nichoir/camera.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CameraServices {

  url: string = environment.BASE_API_URI+"Cameras";

  context:BehaviorSubject<CamerasModel[]>

  constructor(private http : HttpClient) { 
    this.context = new BehaviorSubject<CamerasModel[]>(null);
    this.refresh();
  }
  refresh(){
    return this.http.get<CamerasModel[]>(this.url);
   }

   getDetails(id : number){
    return this.http.get<CamerasModel>(this.url+"/"+id)
  }

  update(Camera : CamerasModel){
    return this.http.put<CamerasModel>(this.url,Camera)
  }
  addCamera(Camera:CamerasModel){
    return this.http.post<CamerasModel>(this.url,Camera)
  }
  delete(id : number){
    return this.http.delete<CamerasModel>(this.url+"/"+id)
  }
  

}
