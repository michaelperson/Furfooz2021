import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SortedpoilistPage } from './sortedpoilist.page';

describe('SortedpoilistPage', () => {
  let component: SortedpoilistPage;
  let fixture: ComponentFixture<SortedpoilistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedpoilistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SortedpoilistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
