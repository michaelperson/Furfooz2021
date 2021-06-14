import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlobetteComponent } from './flobette.component';

describe('FlobetteComponent', () => {
  let component: FlobetteComponent;
  let fixture: ComponentFixture<FlobetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlobetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlobetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
