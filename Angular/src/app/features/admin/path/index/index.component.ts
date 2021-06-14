import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryModel } from 'src/app/core/models/path/categoryModel';
import { plantModel } from 'src/app/core/models/path/plantModel';
import { CategoryPlantService } from 'src/app/core/services/path/category-plant.service';
import { PlantService } from 'src/app/core/services/path/plant.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

  plantList : plantModel[];
  catList : categoryModel[];
  category : string;
  selectedPlant : plantModel;
  options : DataTables.Settings;
  

  constructor(
    protected plantServ : PlantService, 
    private catService : CategoryPlantService, 
    private detectChangeRef: ChangeDetectorRef,
    private route: ActivatedRoute,) { }
  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.plantList = this.route.snapshot.data.resolveListPlant;
    this.catService.context.subscribe(data => {
      this.catList = data;
    });
    
    
    this.options = {
      language : { url : "https://cdn.datatables.net/plug-ins/1.10.21/i18n/French.json" },
      responsive : true
    }
  }

  getName(id : number) {
    let p = this.catList.find(x => x.id == id);
    if(p){
      return p.name
    }
  }

  SoftDelete(id : number){
    let todelete : plantModel;
    todelete = this.plantList.find( x => x.id == id);
    todelete.isDeleted = !todelete.isDeleted;
    this.plantServ.update(todelete).subscribe();    
  }

  // set selectedPlantId(value : number){ 

  //   if(value){
  //     this.selectedPlant = this.plantServ.context.value.find( x => x.id  == value)
  //   }

  // }
}
