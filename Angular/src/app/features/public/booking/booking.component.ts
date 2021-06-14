import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { TariffModel } from 'src/app/core/models/booking/tariff.model';
import { TariffService } from 'src/app/core/services/booking/tariff.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private http: HttpClient, private tariffService : TariffService) { }

  public nbAdulteFurfooz : number = 0;
  public nbEnfantFurfooz : number = 0;
  public nbEtudiantFurfooz : number = 0;
  public nbAdulteVeves : number = 0;
  public nbEnfantVeves : number = 0;
  public nbAdulteMosan : number = 0;
  public nbEnfantMosan : number = 0;

  public prixAdulteFurfooz : number = 5;
  public prixReduitAdulteFurfooz : number = 2;
  public prixEnfantFurfooz : number = 1;
  public prixEtudiantFurfooz : number = 2;
  public prixAdulteVeves : number = 9;
  public prixReduitAdulteVeves : number = 8;
  public prixEnfantVeves : number = 6;
  public prixAdulteMosan : number = 4;
  public prixEnfantMosan : number = 3;

  public total : number = 0.0;

  onChange()
  {
    console.log("OK");
    if ((this.nbAdulteFurfooz + this.nbEnfantFurfooz + this.nbEtudiantFurfooz) >= 15)
    {
      this.prixAdulteFurfooz = this.prixReduitAdulteFurfooz;
    }
    else
    {
      this.prixAdulteFurfooz = 5;
    }

    if ((this.nbAdulteVeves + this.nbEnfantVeves) >= 15)
    {
      this.prixAdulteVeves = this.prixReduitAdulteVeves;
    }
    else
    {
      this.prixAdulteVeves = 9;
    }
    this.total = (this.nbAdulteFurfooz * this.prixAdulteFurfooz) + (this.nbEnfantFurfooz * this.prixEnfantFurfooz) + (this.nbEtudiantFurfooz * this.prixEtudiantFurfooz)
                  + (this.nbAdulteVeves * this.prixAdulteVeves) + (this.nbEnfantVeves * this.prixEnfantVeves) + (this.nbAdulteMosan * this.prixAdulteMosan)
                  + (this.nbEnfantMosan * this.prixEnfantMosan);
  }


  tariffs: TariffModel[];

  ngOnInit(): void {
    this.tariffService.context$.subscribe(data => {
      this.tariffs = data;
    });
  }

}
