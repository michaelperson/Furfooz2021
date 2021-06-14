import { Component, OnInit } from '@angular/core';
import { TariffModel } from 'src/app/core/models/booking/tariff.model';
import { TariffService } from 'src/app/core/services/booking/tariff.service';
import { ToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  constructor(private tariffService: TariffService, private toastr : ToastrService) { }

  tariffs: TariffModel[]; 

  Save()
  {
    console.log(this.tariffs);
    let compt = 0;
    for (let item of this.tariffs)
    {
      console.log("ntm");

      this.tariffService.update(item).subscribe(data =>
      {
        if (compt >= (this.tariffs.length - 1))
        {
          this.toastr.success('Changements sauvegardés !');
          compt = 0;
        }
          
        }, e => {
          this.toastr.error(e);
        });;

      compt ++;
    }
  }

  ngOnInit(): void {
    this.tariffService.context$.subscribe(data => {
      this.tariffs = data;
      console.log("osef");
    });
  }

}
