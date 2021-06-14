import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/core/models/point-of-interests/category.model';
import { PointOfInterestsModel } from 'src/app/core/models/point-of-interests/point-of-interests.model';
import { CategoryService } from 'src/app/core/services/point-of-interests/category.service';
import { PointOfInterestsService } from 'src/app/core/services/point-of-interests/point-of-interests.service';
import * as $ from 'jquery';
import * as L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";
import { ToastrService } from 'src/app/core/services/toastr.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poi-form',
  templateUrl: './poi-form.component.html',
  styleUrls: ['./poi-form.component.scss']
})
export class PoiFormComponent implements OnInit {

  @Input()
  set model(item: PointOfInterestsModel) {
    this.addFormValues(item);
    this.moveMarker(item.Latitude, item.Longitude);
  }
  @ViewChild('cropper')
  cropper: ElementRef

  fg: FormGroup;

  map: L.Map;
  rawImage: string;
  marker: L.Marker = new L.Marker([0, 0]);;

  categories: CategoryModel[];

  imageSource: any;
  crp: Cropper;
  editorOptions: any = {
    width: '100%',
    height: 400,
    mobile: { theme: 'mobile' }
  };

  selectTemplate = (state) => {
    if (!state.id)
      return state.text;
    let item = this.categories.find(x => x.Id == state.id);
    return $(`<span><span style="display:inline-block;width:10px;height:10px;background-color: ${item.PinColor}"></span> ${item.Name_fr}</span>`);
  }

  selectOptions: any = {
    templateResult: this.selectTemplate,
    templateSelection: this.selectTemplate,
    classes: 'form-control'
  };

  constructor(
    private categoryService: CategoryService,
    private poiService: PointOfInterestsService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initMap();
    this.categoryService.context$.subscribe(data => {
      this.categories = data;
    });
    this.initForm();
  }

  private addFormValues(item: PointOfInterestsModel) {
    this.initForm();
    if (item.ImageUrl) {
      this.imageSource = environment.BASE_API_URI + item.ImageUrl
    }
    this.fg.addControl('Id', new FormControl(item.Id, [Validators.required]));
    this.fg.patchValue(item);
  }


  private initForm() {
    if (this.fg) return;
    this.fg = new FormGroup({
      Name_fr: new FormControl(null, [Validators.required]),
      Name_en: new FormControl(null),
      Name_nl: new FormControl(null),
      Description_fr: new FormControl(null),
      Description_en: new FormControl(null),
      Description_nl: new FormControl(null),
      Category_id: new FormControl(null),
      IsDeleted: new FormControl(false, [Validators.required]),
      Image: new FormControl(null),
      mimeType: new FormControl(null),
      Latitude: new FormControl(null),
      Longitude: new FormControl(null),
      Interval: new FormControl(null),
      StartDate: new FormControl(null),
      EndDate: new FormControl(null),

      Camera_Id: new FormControl(null),

    });

  }

  private initMap() {
    this.map = L.map('map').setView([50.2132, 4.9540], 12);
    this.setBounds();
    this.map.setMinZoom(this.map.getZoom() + 1);
    this.marker.addTo(this.map);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.addEventListener('click', (e: L.LeafletMouseEvent) => {
      this.moveMarker(e.latlng.lat, e.latlng.lng)
      console.log(e);
    });
  }

  private moveMarker(latitude: number, longitude: number) {
    if (latitude && longitude) {
      this.marker.setLatLng([latitude, longitude]);
      this.fg.controls['Latitude'].setValue(latitude);
      this.fg.controls['Longitude'].setValue(longitude);
    }
  }

  refreshMarker() {
    let latitude = this.fg.controls['Latitude'].value;
    let longitude = this.fg.controls['Longitude'].value;
    if (latitude && longitude) {
      this.marker.setLatLng([latitude, longitude]);
    }
  }

  setBounds() {
    this.map.fitBounds([
      [environment.MAP_BOUNDS_SOUTH, environment.MAP_BOUNDS_WEST],
      [environment.MAP_BOUNDS_NORTH, environment.MAP_BOUNDS_EAST]
    ]);
  }

  fileChange(event) {
    if (this.crp)
      this.crp.destroy();
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      this.rawImage = <string>e.target.result;
      setTimeout(() => {
        this.crp = new Cropper(
          this.cropper.nativeElement,
          {
            cropBoxResizable: false,
            viewMode: 1,
            aspectRatio: 16 / 10,
            dragMode: 'move',
            crop: event => {
              let blob = this.crp.getCroppedCanvas({ height: 264, width: 414 }).toDataURL('image/jpeg', 0.8);
              let args = blob.split(",");
              this.fg.get("Image").setValue(args[1]);
              this.fg.get("mimeType").setValue(args[0].replace('data:', '').replace(';base64', ''));
              this.imageSource = blob;
            }
          })
      }, 1)
    };
  }

  deletePic() {
    if (this.model != null) {
      this.poiService.deleteImage(this.model.Id).subscribe(x => {
        if (this.crp) {
          this.crp.destroy();
          this.rawImage = null;
        }
        this.imageSource = null;
        this.fg.get("image").setValue(null);
        this.fg.get("mimeTypeImage").setValue(null);
      }, error => {
        console.log("Impossible de supprimer l'image");
      })
    }
    else {
      if (this.crp)
        this.crp.destroy();
      this.rawImage = null;
      this.imageSource = null;
    }
  }

  submit() {
    this.fg.controls["Category_id"].setValue(parseInt(this.fg.controls["Category_id"].value));
    if (this.fg.value.Id) {
      this.poiService.update(this.fg.value).subscribe(data => {
        this.toastr.success('Update OK');
      }, e => {
        this.toastr.error(e);
      });
    }
    else {
      this.poiService.add(this.fg.value).subscribe(data => {
        this.toastr.success('Add OK');
        this.router.navigateByUrl('/admin/point-of-interests');
      }, e => {
        this.toastr.error(e);
      });
    }
  }

}
