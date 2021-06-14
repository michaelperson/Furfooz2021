import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapmenuPage } from './mapmenu.page';

describe('MapmenuPage', () => {
  let component: MapmenuPage;
  let fixture: ComponentFixture<MapmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
