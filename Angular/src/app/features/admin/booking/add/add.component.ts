import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { ParameterService } from 'src/app/core/services/booking/parameter.service';
import { TariffService } from 'src/app/core/services/booking/tariff.service';
import { BookingModel } from 'src/app/core/models/booking/booking.model';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { BookingFormModel } from 'src/app/core/models/booking/booking-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit
{
  constructor(

    private tariffService : TariffService,
    private bookingService : BookingService,
    private toastr : ToastrService,
    private parameterService : ParameterService,
  )
    { this.booking }

  public booking: BookingModel;
  public bookingForm: BookingFormModel;
  public contexte = this.tariffService.context$;
  public _tariff;
  public total: number;
  public hours = [];
  public nbMax: number = 0;
  public hoursByDate = null;
  public nextUrl: string;
  public authorizeRegister : boolean = false;
  public MailAdress;

  Total()
  {

    let totalTickets = this.bookingForm.NbAdults + this.bookingForm.NbKids + this.bookingForm.NbStudents;
    let prixGuide = this.bookingForm.GuidePrice;

    if(this.bookingForm.WantAGuide == false)
    {
      prixGuide = 0;
    }

    if(totalTickets >= 15)
    {
      if(this.bookingForm.TicketType == "Furfooz")
      {
        this.total = (this.bookingForm.NbAdults * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozReducedPrice))
                   + (this.bookingForm.NbKids * (this.contexte.value.find(x => x.TicketType == "Enfant").FurfoozReducedPrice))
                   + (this.bookingForm.NbStudents * (this.contexte.value.find(x => x.TicketType == "Etudiant").FurfoozReducedPrice))
                   + (prixGuide * totalTickets)
                   - (this.bookingForm.Members * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozReducedPrice))

      }
      else if(this.bookingForm.TicketType == "Mosan")
      {
        this.total = (this.bookingForm.NbAdults * (this.contexte.value.find(x => x.TicketType == "Adulte").MosanReducedPrice))
                   + (this.bookingForm.NbKids * (this.contexte.value.find(x => x.TicketType == "Enfant").MosanReducedPrice))
                   + (this.bookingForm.NbStudents * (this.contexte.value.find(x => x.TicketType == "Etudiant").MosanReducedPrice))
                   + (prixGuide * totalTickets)
                   - (this.bookingForm.Members * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozReducedPrice))

      }
      else if(this.bookingForm.TicketType == "Veves")
      {
        this.total = (this.bookingForm.NbAdults * (this.contexte.value.find(x => x.TicketType == "Adulte").VevesReducedPrice))
                   + (this.bookingForm.NbKids * (this.contexte.value.find(x => x.TicketType == "Enfant").VevesReducedPrice))
                   + (this.bookingForm.NbStudents * (this.contexte.value.find(x => x.TicketType == "Etudiant").VevesReducedPrice))
                   + (prixGuide * totalTickets)
                   - (this.bookingForm.Members * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozReducedPrice))

      }
    }
    else
    {
      if(this.bookingForm.TicketType == "Furfooz")
      {
        this.total = (this.bookingForm.NbAdults * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozPrice))
                   + (this.bookingForm.NbKids * (this.contexte.value.find(x => x.TicketType == "Enfant").FurfoozPrice))
                   + (this.bookingForm.NbStudents * (this.contexte.value.find(x => x.TicketType == "Etudiant").FurfoozPrice))
                   + (prixGuide * totalTickets)
                   - (this.bookingForm.Members * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozPrice))

      }
      else if(this.bookingForm.TicketType == "Mosan")
      {
        this.total = (this.bookingForm.NbAdults * (this.contexte.value.find(x => x.TicketType == "Adulte").MosanPrice))
                   + (this.bookingForm.NbKids * (this.contexte.value.find(x => x.TicketType == "Enfant").MosanPrice))
                   + (this.bookingForm.NbStudents * (this.contexte.value.find(x => x.TicketType == "Etudiant").MosanPrice))
                   + (prixGuide * totalTickets)
                   - (this.bookingForm.Members * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozPrice))

      }
      else if(this.bookingForm.TicketType == "Veves")
      {
        this.total = (this.bookingForm.NbAdults * (this.contexte.value.find(x => x.TicketType == "Adulte").VevesPrice))
                   + (this.bookingForm.NbKids * (this.contexte.value.find(x => x.TicketType == "Enfant").VevesPrice))
                   + (this.bookingForm.NbStudents * (this.contexte.value.find(x => x.TicketType == "Etudiant").VevesPrice))
                   + (prixGuide * totalTickets)
                   - (this.bookingForm.Members * (this.contexte.value.find(x => x.TicketType == "Adulte").FurfoozPrice))
                   
      }
    }
  }
  
  RegisterBooking()
  {
    this.booking.Date = this.bookingForm.Date;
    this.booking.Hour = parseInt(this.bookingForm.Time.split(":", 2)[0]);
    this.booking.Minute = parseInt(this.bookingForm.Time.split(":", 2)[1]);
    switch (this.bookingForm.TicketType) {
      case "Furfooz":
        this.booking.CombinedMosan = false;
        this.booking.CombinedVeves = false;
        break;

      case "Mosan":
        this.booking.CombinedMosan = true;
        this.booking.CombinedVeves = false;
        break;

      case "Veves":
        this.booking.CombinedMosan = false;
        this.booking.CombinedVeves = true;
        break;
    
      default:
        this.booking.CombinedMosan = false;
        this.booking.CombinedVeves = false;
        break;
    }
    this.booking.NbAdults = this.bookingForm.NbAdults;
    this.booking.NbStudents = this.bookingForm.NbStudents;
    this.booking.NbKids = this.bookingForm.NbKids;
    this.booking.WantAGuide = this.bookingForm.WantAGuide;
    this.booking.Total = this.total;
    this.booking.IsCheck = false;
    this.booking.MailAdress = "caisse";
    this.booking.MemberNumber = this.bookingForm.Members

    this.bookingService.add(this.booking).subscribe(data =>
    {
      this.toastr.success("Réservation réussie !");
    });
  }

  SetHours() {

    let cpt: number = 0;
    let min: number = 0;
    let hourDivide: number = 0;

    let promesse = new Promise((resolve,reject) => {
      this.parameterService.context.subscribe(data => {
        if(data == null) return;
        hourDivide = parseInt(data.HourDivide);
        resolve(true);
      });
    }).then(() => 
    { 
      cpt = (60 / hourDivide);

      for(let hour : number = 10; hour < 17; hour++){
        min = 45;

        for(let j: number = 0; j < cpt; j++){

          if(min == 45) {
            min = 0;
            this.hours.push({
              time: hour + ":0" + min,
              nbPersonsBooked: 0
            });
          }
          else{
            min += (60 / cpt);
            this.hours.push({
              time: hour + ":" + min,
              nbPersonsBooked: 0
            });
          }
        }
      }

      this.hours.push({time : "17:00", nbPersonsBooked : 0});
      
    });
  }

  GetHours(date : string)
  {
    this.isFormValid(date, this.bookingForm.Time)

    this.bookingService.getHoursByDate(date).subscribe(data => 
    {
      this.hoursByDate = data;
      this.SetNbPersonsBooked(date);
    });
  }

  SetNbPersonsBooked(date : string)
  {
    
    for (let item of this.hours)
    {
      for (let item2 of this.hoursByDate)
      {
        if (item.time == item2)
        {
          // item.nbPersonsBooked = 
          this.bookingService.getTotalByDate(date, item2.split(":", 2)[0], item2.split(":", 2)[1]).subscribe(data => 
            {
              item.nbPersonsBooked = data;
              console.log("Nombre de personnes pour le " + date + " à " + item2 + " : " + data);
            });
        }
      }
    }
  }

  CheckAvailability(nbPers : number)
  {
    if(nbPers == 0)
    {
      return false;
    }
    else
    {
      if((nbPers + this.bookingForm.NbAdults + this.bookingForm.NbKids + this.bookingForm.NbStudents) > this.nbMax)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }

  isFormValid(date : string = '', heure : string = '')
  {
    let chosenDate = Date.parse(date);
    let todayDate = Date.parse(new Date().toDateString());
    let ajd = new Date();

    console.log(ajd.getMonth())

    if(date != '')
    {
      if(heure != '')
      {
        if(chosenDate < todayDate)
        {
          this.authorizeRegister = false;
        }
        else
        {
          console.log(ajd.getDate())
          if(ajd.getDate() == parseInt(date.split("-", 3)[2]) && ajd.getMonth() == parseInt(date.split("-", 3)[1]) - 1)
          {
            if(parseInt(heure.split(":", 2)[0]) < ajd.getHours())
            {
              this.authorizeRegister = false;
              console.log("trop petit")
            }
            else if (parseInt(heure.split(":", 2)[0]) == ajd.getHours())
            {
              if(parseInt(heure.split(":", 2)[1]) <= ajd.getMinutes())
              {
                this.authorizeRegister = false;
                console.log("trop petit")
              }
              else
              {
                this.authorizeRegister = true;
              }
            }
            else
            {
              this.authorizeRegister = true;
            }
          }
          else
          {
            this.authorizeRegister = true;
          }
          
          console.log(date)
          console.log(heure)
        }
      }
    }
  }
  
  ngOnInit(): void
  {
    this.contexte.subscribe(data => {
      this._tariff = data;
    });

    this.booking = {​​
      Id : 0, Date : '',
      Hour : 10, Minute : 0, CombinedMosan : false, CombinedVeves : false,
      NbAdults : 0, NbKids : 0, NbStudents : 0, Reference : "blabla", Total : 0.0, WantAGuide : true,
      IdStripe: null, IsCheck: false, MailAdress: "caisse", MemberNumber: 0, Payed: false,
      PayementType: "bancontact", SendMail: false
    };

    this.bookingForm = {
      Date : '', NbAdults : 0, NbKids : 0, NbStudents : 0, TicketType : "Furfooz", Time : "10:00", WantAGuide : false, GuidePrice : 0, Mail: "", Members: 0
    }

    let promesse = new Promise((resolve,reject) => {
      this.parameterService.context.subscribe(data => {
        if(data == null) return;
        this.nbMax = parseInt(data.PersonLimit);
        resolve(true);
      });
    }).then(() => {
          this.SetHours();
    });
  }
}
