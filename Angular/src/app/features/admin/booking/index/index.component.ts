import { Component, OnInit } from '@angular/core';
import { BookingModel } from 'src/app/core/models/booking/booking.model';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { ToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private bookingService: BookingService, private toastr: ToastrService) { }

  options : DataTables.Settings;
  bookings: BookingModel[];
  lastBooking: number;
  offset: number;
  limit: number;
  min: number;
  max: number;

  ngOnInit() {
    this.options = {
      language : { url : "https://cdn.datatables.net/plug-ins/1.10.21/i18n/French.json" }
    }

    this.offset = 0;
    this.limit = 10;
    this.bookingService.getCount().subscribe(data => {
      this.lastBooking = data;
    });
    this.bookingService.context$.subscribe(data => {
      this.bookings = data;
    });
    this.min = 1;
    this.max = 10;
    this.renderList(this.offset, this.limit);
  }

  changePage(num: number){
    
    if(num === -1){
      if((this.offset - this.limit < 0)) {
        this.offset = 0;
      }
      else{
        this.offset -= this.limit;
      }
    }
    else{
      if((this.max + this.limit > this.lastBooking)) {
        this.offset = this.lastBooking - this.limit;
      }
      else{
        this.offset += this.limit;
      }
    }

    this.min = this.offset + 1;
    this.max = this.limit + this.offset;
    this.renderList(this.offset, this.limit);
  }

  changeLimit() {
    if(this.offset + this.limit > this.lastBooking){
      this.max = this.lastBooking;
    }
    else {
      this.max = this.offset + this.limit;
    }
    this.renderList(this.offset, this.limit);
  }
  
  renderList(offset: number, limit: number) {
    this.bookingService.refresh(offset, limit);
  }

  sendMail(ref: string) {
    this.bookingService.sendMail(ref).subscribe(x => {
      this.toastr.success("Mail envoyé !");
    });
  }
}
