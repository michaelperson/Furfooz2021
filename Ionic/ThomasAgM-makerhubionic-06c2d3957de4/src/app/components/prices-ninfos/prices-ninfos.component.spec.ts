import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesNinfosComponent } from './prices-ninfos.component';

describe('PricesNinfosComponent', () => {
  let component: PricesNinfosComponent;
  let fixture: ComponentFixture<PricesNinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricesNinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesNinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
