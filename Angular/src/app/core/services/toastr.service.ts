import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {


  constructor() { }

  success(content: string, title: string = null ) {
    toastr.success(content, title);
  }

  error(content: string, title: string = null ) {
    toastr.error(content, title);
  }

  warning(content: string, title: string = null ) {
    toastr.warning(content, title);
  }

  info(content: string, title: string = null ) {
    toastr.info(content, title);
  }
}
