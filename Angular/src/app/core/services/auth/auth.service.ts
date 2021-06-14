import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../../models/auth/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = environment.BASE_API_URI;

  constructor(
    private http: HttpClient
  ) { }

  login(model: LoginModel): Observable<string> {
    return this.http.post<string>(this.url + 'security/login', model)
  }
}
