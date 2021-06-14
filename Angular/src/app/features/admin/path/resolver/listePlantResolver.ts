import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { plantModel } from 'src/app/core/models/path/plantModel';
import { PlantService } from 'src/app/core/services/path/plant.service';
import { finalize } from "rxjs/operators";



@Injectable({
    providedIn: 'root'
  })
  
export class ListPlantResolver implements Resolve<plantModel[]>{
    constructor(private plantServ:PlantService){}
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot)
    : plantModel[] | import("rxjs").Observable<plantModel[]> | Promise<plantModel[]> {  
        // return this.plantServ.get().pipe(finalize(() => {console.log("RESOLVER")}));
        return this.plantServ.context;
    }
}
