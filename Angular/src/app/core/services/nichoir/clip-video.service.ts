import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClipVideoModel } from '../../models/nichoir/clipVideo.model';

@Injectable({
  providedIn: 'root'
})
export class ClipVideoService {

  url: string = environment.BASE_API_URI+"ClipVideo";

  context:BehaviorSubject<ClipVideoModel[]>

  constructor(private http : HttpClient) { 
    this.context = new BehaviorSubject<ClipVideoModel[]>(null);
  }
  refresh(id:number){
    return this.http.get<ClipVideoModel[]>(this.url+"/CameraId/"+id);
   }

   getDetails(id : number){
    return this.http.get<ClipVideoModel>(this.url+"/"+id)
  }

  update(ClipVideo : ClipVideoModel){
    return this.http.put<ClipVideoModel>(this.url,ClipVideo)
  }
  addCamera(ClipVideo:ClipVideoModel){
    console.log(ClipVideo);
    return this.http.post<ClipVideoModel>(this.url,ClipVideo)
  }
  delete(id : number){
    console.log("delete");
    return this.http.delete<ClipVideoModel>(this.url+"/"+id)
  }

}
