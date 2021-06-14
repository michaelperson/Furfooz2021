import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { plantModel } from 'src/app/core/models/path/plantModel';
import { PlantService } from 'src/app/core/services/path/plant.service';



@Injectable({
    providedIn: 'root'
  })
  
export class UpdateResolver implements Resolve<plantModel>{
    constructor(private plantService:PlantService){}
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot)
    : plantModel | import("rxjs").Observable<plantModel> | Promise<plantModel> {  
        return this.plantService.getById(route.params.id);
    }
}
