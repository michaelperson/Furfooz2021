import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plantModel } from 'src/app/core/models/path/plantModel';
import { PlantService } from 'src/app/core/services/path/plant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  selectedPlant : plantModel;

  constructor(private plantService : PlantService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.plantService.context.subscribe(data => {
      if(!data) return;
        this.selectedPlant = data.find(x => x.id == id)
    })
  }
}
