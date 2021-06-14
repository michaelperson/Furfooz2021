import { Injectable } from '@angular/core';
import { Flobette } from '../models/flobette';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlobetteServiceService {
  private url: string = environment.API_PLANT_IMG + "buvette";
  context : BehaviorSubject<Flobette[]>

  constructor(private http : HttpClient) {
    this.context = new BehaviorSubject<Flobette[]>(null);
    this.refresh();
   }

  refresh(){
    this.http.get<Flobette[]>(this.url).subscribe(data=> 
     {this.context.next(data)});
  }
}
