import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpModule,
  ],
  providers: [BandService, BandEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
