import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertDialogPage } from './alert-dialog.page';

describe('AlertDialogPage', () => {
  let component: AlertDialogPage;
  let fixture: ComponentFixture<AlertDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
