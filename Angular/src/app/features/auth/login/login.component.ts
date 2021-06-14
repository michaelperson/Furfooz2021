import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SessionService } from 'src/app/core/services/session.service';
import { ToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg: FormGroup;
  constructor(
    private authService: AuthService,
    private session: SessionService,
    private router: Router,
    private toast:ToastrService
  ) { }
    
  ngOnInit(): void {
    this.fg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    if(this.fg.valid) {
      console.log(this.fg);
      
      this.authService.login(this.fg.value).subscribe(data => { 
        if(data)
        {       
          this.session.start(data);
          this.toast.success("Bienvenue");
          this.router.navigateByUrl('/admin/dashboard')
        }
        else
          this.toast.error("Echec de connection");
      }, error => {this.toast.error("Echec de connection");});
    }
  }
}
