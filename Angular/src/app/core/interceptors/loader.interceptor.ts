import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { delay, finalize } from 'rxjs/operators';
import { map } from 'jquery';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private requesters = [];
  private startTime;

  constructor(
    private loader: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    if(this.requesters.length == 0)
      this.startTime = new Date().getTime();
    this.requesters.push(request)
    return next.handle(request).pipe(delay(1000 - (new Date().getTime() - this.startTime)), finalize(() => {
      this.requesters.pop();
      if(this.requesters.length == 0)
        this.loader.hide();
    }));
  }
}
