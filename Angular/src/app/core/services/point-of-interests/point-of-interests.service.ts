import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PointOfInterestsModel } from '../../models/point-of-interests/point-of-interests.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointOfInterestsService {

  context$: BehaviorSubject<PointOfInterestsModel[]>

  constructor(
    private http: HttpClient
  ) { 
    this.context$ = new BehaviorSubject<PointOfInterestsModel[]>([]);
    this.refresh();
  }

  refresh() {
    this.http.get<PointOfInterestsModel[]>(environment.BASE_API_URI + 'pointinteret')
      .subscribe(data => {
        this.context$.next(data);
      });
  }

  update(model: PointOfInterestsModel) {
    return this.http.put<any[]>(environment.BASE_API_URI + 'pointinteret', model)
      .pipe(finalize(() => { this.refresh(); }));
  }

  add(model: PointOfInterestsModel) {
    return this.http.post<any[]>(environment.BASE_API_URI + 'pointinteret', model)
      .pipe(finalize(() => { this.refresh(); }));
  }

  deleteImage(id : number){
    return this.http.put(environment.BASE_API_URI + "delete-img/" + id, null)
   }
}
