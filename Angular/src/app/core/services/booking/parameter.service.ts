import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ParameterModel} from '../../models/booking/parameter.model';
import { ApiParameterModel } from '../../models/booking/apiparameter.model';
import { Subject } from 'rxjs/internal/Subject';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  // context : BehaviorSubject<ParameterModel>
  context : BehaviorSubject<ParameterModel>

  constructor(
    private http: HttpClient
  ) {
    this.refresh();
    this.context = new BehaviorSubject<ParameterModel>(null);
   }

  refresh(){
    
    this.http.get<any>(environment.RESA_API_URI + 'parameter').subscribe(data => {
      let parameter = { };
      for(let item of data)
      {
        parameter[item.ParameterName] = item.Value
      }
      this.context.next(<ParameterModel>parameter);
    });
  }

  update(model: ApiParameterModel) {
    return this.http.put<any[]>(environment.RESA_API_URI + 'parameter', model)
      .pipe(finalize(() => { this.refresh(); }));
  }
}
