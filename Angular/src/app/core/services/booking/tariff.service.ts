import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'tinymce';
import { TariffModel } from '../../models/booking/tariff.model';
import { PointOfInterestsModel } from '../../models/point-of-interests/point-of-interests.model';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  context$: BehaviorSubject<TariffModel[]>

  constructor(
    private http: HttpClient
  ) { 
    this.context$ = new BehaviorSubject<TariffModel[]>([]);
    this.refresh();
  }

  refresh(){
    this.http.get<TariffModel[]>(environment.RESA_API_URI + 'tarif').subscribe(data => {
      this.context$.next(data);
    });
  }

  update(model: TariffModel) {
    return this.http.put<any[]>(environment.RESA_API_URI + 'tarif', model)
      .pipe(finalize(() => { this.refresh(); }));
  }

  add(model: TariffModel) {
    return this.http.post<any[]>(environment.RESA_API_URI + 'tarif', model)
      .pipe(finalize(() => { this.refresh(); }));
  }

  delete(id: number) {
    this.http.delete<any>(environment.RESA_API_URI + 'tarif/' + id);
  }
}