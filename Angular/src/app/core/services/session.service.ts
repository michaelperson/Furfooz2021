import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import jwt_decode from "jwt-decode";
import { ToastrService } from './toastr.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: UserModel;
  public get user() : UserModel {
    return this._user;
  }
  constructor(
    private toast : ToastrService,
    private router : Router) { 
    let token = localStorage.getItem('TOKEN');
    if(token)
    {
      this._user = this.decode(token);   
      this.toast.warning("Vous êtes connecté sous : "+this.user.name)
      this.router.navigateByUrl('/admin/dashboard')  
    }
  }

  start(token: string) {
    localStorage.setItem('TOKEN', token);
    this._user = this.decode(token);
  }

  stop () {
    this.toast.info("Vous êtes à présent déconnecté")
    localStorage.clear();
    this._user = null;  
  }

  private decode(token) : UserModel {
  let decoded = jwt_decode(token);
  return {
    name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
    role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
  }
}
}
