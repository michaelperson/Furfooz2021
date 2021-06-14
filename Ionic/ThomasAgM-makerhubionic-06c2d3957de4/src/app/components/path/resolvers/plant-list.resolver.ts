import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { PlantService } from 'src/app/services/plant.service';
import { PlantModel } from 'src/app/models/plant';
import { finalize } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
  })
  
export class PlantListResolver implements Resolve<PlantModel[]>{
    constructor(private plantService:PlantService){}
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot)
    : PlantModel[] | import("rxjs").Observable<PlantModel[]> | Promise<PlantModel[]> {
          return this.plantService.getAll().pipe(finalize(() => {}));
    }  
}
