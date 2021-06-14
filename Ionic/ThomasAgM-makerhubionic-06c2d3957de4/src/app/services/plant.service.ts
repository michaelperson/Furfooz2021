import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PlantModel } from '../models/plant';


@Injectable({
  providedIn: 'root'
})
export class PlantService{

  plantList:BehaviorSubject<PlantModel[]>;
  public url: string = environment.API_PLANT;
  public urlImg: string = environment.API_PLANT_IMG;

  constructor(private http: HttpClient) {
    this.plantList = new BehaviorSubject<PlantModel[]>([]);
    this.getAll().subscribe(data =>{
      this.plantList.next(data);
    })
  }


  getAll(){
    return this.http.get<PlantModel[]>(this.url)
  }

  refresh(){
    return this.http.get<PlantModel[]>(this.url).pipe(map(plant => {
      for(let p of plant){
        p.isSaved = false;        
      }
    }))
  }
  

  getById(id:number){
    return this.http.get<PlantModel>(this.url + id);
  }

  GetCurrentSeason() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let today = month + (day / 100);
    // if (today < 3.21 && today >= 12.22)
    if (today < 3.21 && today >= 1.01)
     {
      return 0;
    }
    else if(today >= 12.22){
      return 0;
    }
    else if (today < 6.21) {
      return 1;
    }
    else if (today < 9.23) {
      return 2
    }
    else 
      return 3
  }
}
