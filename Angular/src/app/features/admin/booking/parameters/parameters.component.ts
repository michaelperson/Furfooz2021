import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParameterModel } from 'src/app/core/models/booking/parameter.model';
import { ApiParameterModel } from 'src/app/core/models/booking/apiparameter.model';
import { ParameterService } from 'src/app/core/services/booking/parameter.service';
import { ToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  fg: FormGroup;
  parameters : ParameterModel;

  GoodDivide : boolean = true;
  CheckMessage : string;

  constructor(
    private toastr: ToastrService,
    private parameterService : ParameterService
  ) {}

  ngOnInit() {
    this.initForm();
    if(this.parameterService.context.value == null)
    {
      this.parameterService.context.subscribe(data => {
        if(data==null) return
        this.parameters = data;
        this.addFormValues(this.parameters); 
      });
    }
    else
    {
      this.addFormValues(this.parameterService.context.value);
    }
  }

  private initForm() {
    if(this.fg) return;
    this.fg = new FormGroup({
      PersonLimit: new FormControl(null),
      HourDivide: new FormControl(null),
      StartHour: new FormControl(null),
      EndHour: new FormControl(null)
    });
  }

  private addFormValues(item: ParameterModel) {
    this.fg.patchValue(item);
  }

  submit() {
    for(let v in this.fg.value)
    {
      let apimodel : ApiParameterModel = { Id : 0 , ParameterName : v , Value :  this.fg.controls[v].value }
      
      this.parameterService.update(apimodel).subscribe(data => {
        this.toastr.success(`Update OK`);
      }, e => {
        this.toastr.error(e);
      });
    }
  }
  
  CheckHourDivide() {
    
    if(this.fg.controls["HourDivide"].value == 0)
    {
      this.GoodDivide = true
    }
    else if(this.fg.controls["HourDivide"].value == null)
    {
      this.GoodDivide = false
      
      this.CheckMessage = "Veuillez entrer une valeur";
    }
    else if (this.fg.controls["HourDivide"].value != 0)
    {
      60 % this.fg.controls["HourDivide"].value != 0 ? this.GoodDivide = false : this.GoodDivide = true;
      this.CheckMessage = "La division de 60 minutes par ce chiffre ne donne pas une division valable";
    }
  }
}
