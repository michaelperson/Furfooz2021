import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { poiObject } from '../models/poi';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PointsofinterestService {
  url: string = environment.BASE_URL;
  urlImg : string = environment.BASE_URL_IMG;
  context:BehaviorSubject<poiObject[]>

  today : Date;
  year: number;

  constructor(private client : HttpClient) {

    this.today = new Date();
    this.year = new Date().getFullYear();
    
    this.context = new BehaviorSubject<poiObject[]>([]);
    this.refresh();
   }

   refresh(){
     this.client.get<poiObject[]>(this.url).pipe(map((x) => {
       for(let item of x)
       {
         item.IsSeen = false;
         item.AlreadyShown = false;
         item.CurrentPositionDist = 0;
       }
       return x.filter(y => y.IsDeleted != true && this.CheckDate(y));
     })).subscribe(data => this.context.next(data));
   }

   CheckDate(poi : poiObject)
   {
    
    let poiDayStart = poi.StartDate != null ? new Date(poi.StartDate).getDate() : 1;
    let poiDayEnd =poi.EndDate != null ? new Date(poi.EndDate).getDate() : 31;

    let poiMonthStart = poi.StartDate != null ? new Date(poi.StartDate).getMonth() : 0;
    let poiMonthEnd = poi.EndDate != null ? new Date(poi.EndDate).getMonth() : 11;
    
    let startDate = new Date(this.year, poiMonthStart, poiDayStart);
    let endDate = new Date(this.year, poiMonthEnd, poiDayEnd);

    if(this.today >= startDate && this.today <= endDate)
    {
      return true;
    }

    else
    {
      return false;
    }
  }
  getAll(){
    return this.client.get<poiObject[]>(this.url);
  }

  getById(id:number){
    return this.client.get<poiObject>(this.url + id);
  }

}

