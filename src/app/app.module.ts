import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BandSearchComponent } from './band-search/band-search.component';
import { BandService } from './band.service';
import { BandListingComponent } from './band-listing/band-listing.component';
import { BandEventListingComponent } from './band-event-listing/band-event-listing.component';
import { BandEventService } from './band-event.service';


@NgModule({
  declarations: [
    AppComponent,
    BandSearchComponent,
    BandListingComponent,
    BandEventListingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [BandService, BandEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
