import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClipVideoPage } from './clip-video.page';

describe('ClipVideoPage', () => {
  let component: ClipVideoPage;
  let fixture: ComponentFixture<ClipVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClipVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
