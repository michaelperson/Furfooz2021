import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenericpoiPage } from './genericpoi.page';

describe('GenericpoiPage', () => {
  let component: GenericpoiPage;
  let fixture: ComponentFixture<GenericpoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericpoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericpoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
