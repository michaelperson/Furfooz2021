import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Cropper from 'cropperjs';
import * as L from 'leaflet';
import { categoryModel } from 'src/app/core/models/path/categoryModel';
import { plantModel } from 'src/app/core/models/path/plantModel';
import { CategoryPlantService } from 'src/app/core/services/path/category-plant.service';
import { PlantService } from 'src/app/core/services/path/plant.service';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})
export class PlantFormComponent implements OnInit {

  ngOnDestroy(): void {
    document.getElementById("map").outerHTML = "";
  }
  
  // @Input()
  // set model(item : plantModel) {
  //   this.addFormValues(item);
  //   this.moveMarker(item.latitude, item.longitude);
  // }


  @ViewChild('cropper')
  cropper: ElementRef

  @ViewChild('fileInput')
  fileInput: ElementRef
  model:plantModel;
  fg : FormGroup;
  map: L.Map;
  marker: L.Marker = new L.Marker([0,0]);
  allCat : categoryModel[];
  imageSource : any;
  audioSource : any;
  crp: Cropper;
  Seasons : any[]

  editorOptions: any = { 
    width: '100%',
    height: 400,
    mobile : { theme: 'mobile' } 
  };

  rawImage: string;
  constructor(
    private plantService  : PlantService, 
    private toastr : ToastrService, 
    private router : Router, 
    private catService : CategoryPlantService,
    private route: ActivatedRoute,
    private detectChangeRef: ChangeDetectorRef) {
    this.allCat = [];
    
   }

  ngOnInit(): void {
    this.model = this.route.snapshot.data.resolvePlant;
    this.addFormValues(this.model);
    this.initMap();
    this.catService.context.subscribe( x => {
      this.allCat = x ;
      this.initForm();
    });
    if(this.model)
    {
      this.moveMarker(this.model.latitude, this.model.longitude);
    }
  }
  
  private async setSeasons(){
    this.Seasons = [
      { name: 'Hiver', value: 0, checked : false },
      { name: 'Printemps', value: 1, checked : false },
      { name: 'Été', value: 2, checked : false },
      { name: 'Automne', value: 3, checked : false }
      ];
  }
  submit() {
    if(this.fg.value.Id){
      this.plantService.update(this.fg.value).subscribe ( x =>  {
      console.log(this.fg.value)

      this.toastr.success("Modification effectuée");
      this.router.navigateByUrl("/admin/path");

      }),
      e => {
        this.toastr.error("Une erreur est survenue")
      }
    }
    else { 
      this.plantService.add(this.fg.value).subscribe ( x => { this.toastr.success("Plante ajoutée");
      this.router.navigateByUrl("/admin/path");
      console.log(this.fg.value)
      },
      e => {
        this.toastr.error("Une erreur est survenue")
      });
    }
    
  }
  refreshMarker() {
    let latitude = this.fg.controls['Latitude'].value;
    let longitude = this.fg.controls['Longitude'].value;
    if(latitude && longitude) {
      this.marker.setLatLng([latitude, longitude]);
    }
  }
  
  setBounds() {
    this.map.fitBounds([
      [environment.MAP_BOUNDS_SOUTH, environment.MAP_BOUNDS_WEST], 
      [environment.MAP_BOUNDS_NORTH, environment.MAP_BOUNDS_EAST]
    ]);
  }

  private initForm() {
    if(this.fg) return;
    this.fg = new FormGroup({
      name_fr : new FormControl(null, [Validators.required]),
      name_nl : new FormControl(null),
      name_en : new FormControl(null),
      name_la : new FormControl(null),
      image : new FormControl(null),
      audio : new FormControl(null),
      description1_fr : new FormControl(null, [Validators.required]),
      description1_nl : new FormControl(null),
      description1_en : new FormControl(null),
      description2_fr : new FormControl(null),
      description2_nl : new FormControl(null),
      description2_en : new FormControl(null),
      description3_fr : new FormControl(null),
      description3_nl : new FormControl(null),
      description3_en : new FormControl(null),
      latitude : new FormControl(null),
      longitude : new FormControl(null),
      isDeleted : new FormControl(false),
      categoryPlant_id : new FormControl(null),
      mimeTypeImage : new FormControl(null),
      mimeTypeAudio : new FormControl(null),
      seasons : new FormArray([])
     })
  }

  onCheckboxChange(e) {
    let seasons = this.fg.get('seasons') as FormArray;
    if(e.target.checked){
      seasons.push(new FormControl(e.target.value));
      console.log(e.target.value);      
    }
    else {
      let i = 0;
      seasons.controls.forEach((item : FormControl) => {
        if(item.value == e.target.value){
          seasons.removeAt(i);
          return;
        }
        i++
      })
    }
  }

  private initMap() {
    this.map = L.map('map', {
      center: [50.2132,4.9540],
      scrollWheelZoom: false
  });
    this.setBounds();
    this.marker.addTo(this.map);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.addEventListener('click', (e: L.LeafletMouseEvent) => {
      this.moveMarker(e.latlng.lat, e.latlng.lng)
      console.log(e);
    });
  }

  private moveMarker(latitude: number, longitude: number) {
    if(latitude && longitude) {
      this.marker.setLatLng([latitude, longitude]);
      this.fg.controls['latitude'].setValue(latitude);
      this.fg.controls['longitude'].setValue(longitude);
    }
  }

  fileChange(event) {
    if(this.crp )
      this.crp.destroy();
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      this.rawImage = <string>e.target.result;
      setTimeout(() => {
        this.crp = new Cropper(
          this.cropper.nativeElement,
          { cropBoxResizable: false,
            viewMode : 1, 
            aspectRatio: 16/10,
            dragMode : 'move',
            crop: event => {           
              let blob = this.crp.getCroppedCanvas({height : 264, width : 414}).toDataURL('image/jpeg', 0.8);
              console.log(blob.length);
              
              let args = blob.split(",");
              this.fg.get("image").setValue(args[1]);
              this.fg.get("mimeTypeImage").setValue(args[0].replace('data:', '').replace(';base64', ''));
              this.imageSource = blob;
        }})
      }, 1)
    };
  }
  

  private async addFormValues(item: plantModel) {
    await this.setSeasons();
    this.initForm();
    if(item?.imageUrl) {
      this.imageSource = environment.PATH_API_URI + item.imageUrl
    }
    if(item)
    {
      this.fg.addControl('Id', new FormControl(item.id, [Validators.required]));
      this.fg.patchValue(item);
      for(let t of this.Seasons)
      {
        if(item.seasons.includes(t.value))
          t.checked = true
      }
      let s = this.fg.get('seasons') as FormArray;
      for (const i of item.seasons) 
      {
        s.push(new FormControl(i));    
      }
    }
  }


  selectedPlant : plantModel;
    set selectedPlantId(value : number){ 
    if(value){
      this.plantService.context.subscribe(x => 
        this.selectedPlant = x.find( x => x.id  == value))
    }
  }

  deletePic(){
    if (this.selectedPlantId != null) {
      this.plantService.deleteImage(this.fg.get("Id").value).subscribe( x => {
        if(this.crp)
          this.crp.destroy();
          this.rawImage = null;
        this.imageSource = null;
        this.fg.get("image").setValue(null);
        this.fg.get("mimeTypeImage").setValue(null);
      }, error => {
        console.log("Impossible de supprimer l'image");    
      })
    }
    else{
      if(this.crp )
        this.crp.destroy();
        this.rawImage = null;
      this.imageSource = null;
    }
  }

}
