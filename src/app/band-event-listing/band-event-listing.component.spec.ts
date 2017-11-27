import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandEventListingComponent } from './band-event-listing.component';

describe('BandEventListingComponent', () => {
  let component: BandEventListingComponent;
  let fixture: ComponentFixture<BandEventListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandEventListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandEventListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
