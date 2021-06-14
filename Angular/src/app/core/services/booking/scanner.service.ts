import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookingModel } from '../../models/booking/booking.model';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  baseUrl: string = environment.RESA_API_URI + 'booking/reference/';

  constructor(private http: HttpClient) { }

  public logReference(ref: string ): Observable<BookingModel> {
    return this.http.get<BookingModel>(this.baseUrl + ref);
  }
}
