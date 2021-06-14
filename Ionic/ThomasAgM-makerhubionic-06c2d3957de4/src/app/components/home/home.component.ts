import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/services/permission.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private permission : PermissionService,
  ) { }

  ngOnInit(): void {
    this.permission.askPermissionGps();
    
  }

}
