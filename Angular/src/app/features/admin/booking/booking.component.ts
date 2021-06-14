import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TariffService } from '../../../core/services/booking/tariff.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public listOfTariff;


  constructor(private http:HttpClient, private tariffService : TariffService) { }

  ngOnInit(): void
  {
    this.http.get("http://localhost:64774/api/tarif").subscribe(data =>
    {
      this.listOfTariff = data;
      
    })
  }
}
