import { BandEventService } from './../band-event.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BandEvent } from '../band-event';

@Component({
  selector: 'app-band-event-listing',
  templateUrl: './band-event-listing.component.html',
  styleUrls: ['./band-event-listing.component.css']
})
export class BandEventListingComponent implements OnInit, OnDestroy {

  @Input() bandEvents: BandEvent[];

  subscription: Subscription;

  constructor(private bandEventService: BandEventService) {
    this.subscription = this.bandEventService.read().subscribe(bandEvents => {
      if (bandEvents !== 'EMPTY') {
        console.log(JSON.stringify(bandEvents));
        this.bandEvents = JSON.parse(JSON.stringify(bandEvents));
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
