import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BookingModel } from '../../models/booking/booking.model';
import { BookingStatsModel } from '../../models/booking/bookingStats.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  context$: BehaviorSubject<BookingModel[]>
  offset: number = 0;
  limit: number = 10;

  constructor(
    private http: HttpClient
  ) { 
    this.context$ = new BehaviorSubject<BookingModel[]>([]);
    this.refresh(this.offset, this.limit);
  }

  refresh(offset: number, limit: number){
    this.http.get<BookingModel[]>(environment.RESA_API_URI + 'booking' + "?offset=" + offset + "&limit=" + limit).subscribe(data => {
      this.context$.next(data);
    });
  }

  public checkEmail(mailadress : string): Observable<BookingModel[]> {
    return this.http.get<BookingModel[]>(environment.RESA_API_URI + 'booking/mailadress/' + mailadress);
  }

  // update(model: BookingModel) {
  //   return this.http.put<any[]>(environment.RESA_API_URI + 'tarif', model)
  //     .pipe(finalize(() => { this.refresh(); }));
  // }

  // getByOffset(offset: number, limit: number) {
  //   return this.http.get<BookingModel[]>(environment.RESA_API_URI + 'booking' + "?offset=" + offset + "&limit=" + limit)
  //   })
  // }

  add(model: BookingModel) {
    return this.http.post<any[]>(environment.RESA_API_URI + 'booking', model)
      .pipe(finalize(() => { this.refresh(this.offset, this.limit); }));
  }

  sendMail(ref: string){
    return this.http.get(environment.RESA_API_URI + 'booking/mail/' + ref);
  }

  getTotalByDate(date: string, hour: number, minute: number)
  {
    return this.http.get<number>(environment.RESA_API_URI + 'booking/' + date + "/" + hour + "/" + minute);
  }

  getRef(date: string, mail: string) {
    return this.http.get<string>(environment.RESA_API_URI + 'booking/reference/' + date + "/" + mail, {responseType: 'text' as 'json'});
  }

  getHoursByDate(date : string)
  {
    return this.http.get<number>(environment.RESA_API_URI + 'booking/hours/' + date);
  }

  getCount() {
    return this.http.get<number>(environment.RESA_API_URI + 'booking/count');
  }

  checkById(id: number) {
    return this.http.put<any[]>(environment.RESA_API_URI + 'booking/check/'+ id, null)
      .pipe(finalize(() => { this.refresh(this.offset, this.limit); }));
  }

  // delete(id: number) {
  //   this.http.delete<any>(environment.RESA_API_URI + 'tarif/' + id);
  // }

  getStats(startDate: Date, endDate: Date, periodicity: string) {
    let params = new HttpParams();
    params = params.append('startDate', startDate.toJSON());
    params = params.append('endDate', endDate.toJSON());
    params = params.append('periodicity', periodicity);
    return this.http.get<BookingStatsModel[]>(environment.RESA_API_URI + 'booking/stats', { params });
  }
}
