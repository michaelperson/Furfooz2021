import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  collapsed: boolean;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.collapsed = true;
  }

  logout() {
    this.session.stop();
    this.router.navigateByUrl('auth/login');
  }

  collapse() {
    this.collapsed = true;
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
