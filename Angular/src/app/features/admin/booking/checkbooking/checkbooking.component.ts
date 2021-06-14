import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { BookingModel } from '../../../../core/models/booking/booking.model';
import { Appointment } from '../../../../core/models/booking/appointment.model'
import { ScannerService } from '../../../../core/services/booking/scanner.service';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { BookingService } from 'src/app/core/services/booking/booking.service';

@Component({
  selector: 'app-checkbooking',
  templateUrl: './checkbooking.component.html',
  styleUrls: ['./checkbooking.component.scss']
})
export class CheckbookingComponent implements OnInit {

  public scannerEnabled: boolean = true;
  public booking: BookingModel;

  public bookings: BookingModel[];

  public reference: string;
  public mailAdress: string;

  constructor(
      private scanService: ScannerService, 
      private cd: ChangeDetectorRef,
      private toastr: ToastrService,
      private bookservice: BookingService
    ) { }

  ngOnInit(): void {
    this.scannerEnabled = false;
    this.reference = '';
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;

    this.bookings = null;

    const appointment = new Appointment($event);
    
    this.scanService.logReference($event).subscribe(
      (result: BookingModel) => {
        this.booking = result;
        this.cd.markForCheck();
      },
      (error: any) => {
        this.cd.markForCheck();
      });
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.booking = null;
  }

  public checkByReference() {
    // console.log(this.reference);

    this.bookings = null;
    
    this.scanService.logReference(this.reference).subscribe(
      (result: BookingModel) => {
        this.booking = result;
        this.reference = null;
      },
      (error: any) => {
        this.toastr.error("Cette référence n'existe pas");
      });
  }

  public checkByMail() {
    this.booking = null;
    
    this.bookservice.checkEmail(this.mailAdress).subscribe(
      (result: BookingModel[]) => {
        this.bookings = result;
        this.mailAdress = null;
        if(this.bookings.length == 0)
        {
          this.toastr.error("Cette adresse mail n'existe pas");
        }
      },
      (error: any) => {
      });
  }

  public CheckBookingById(id: number, $event: any)
  {
    let btn: HTMLElement = $event.target;
    
    this.bookservice.checkById(id).subscribe(data => {
      this.toastr.success(`Ticket validé`);
      btn.setAttribute("disabled", "true");
    }, e => {
      this.toastr.error(e);
    });
  }

  public RAZ() {
    this.booking = null;
    this.bookings = null;
    this.mailAdress = null;
    this.reference = null;
  }
}
