import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeCamerasPage } from './liste-cameras.page';

describe('ListeCamerasPage', () => {
  let component: ListeCamerasPage;
  let fixture: ComponentFixture<ListeCamerasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCamerasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeCamerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
