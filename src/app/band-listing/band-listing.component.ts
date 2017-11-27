import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-band-listing',
  templateUrl: './band-listing.component.html',
  styleUrls: ['./band-listing.component.css']
})
export class BandListingComponent implements OnInit, OnDestroy {

  @Input() bands: Band[];

  subscription: Subscription;

  constructor(private bandService: BandService) {
      this.subscription = this.bandService.read().subscribe(band => {
        if (band !== 'EMPTY') {
          console.log(JSON.stringify(band));
          this.bands = [JSON.parse(JSON.stringify(band))];
        }
      });
  }

  trackBand(index, band) {
    return band ? band.id : undefined;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
