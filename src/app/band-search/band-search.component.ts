import { Component, Input, OnInit, Output } from '@angular/core';
import { BandEventService } from '../band-event.service';
import { BandService } from './../band.service';
import { Band } from '../band';

@Component({
  selector: 'app-band-search',
  templateUrl: './band-search.component.html',
  styleUrls: ['./band-search.component.css']
})
export class BandSearchComponent implements OnInit {

  band: string;

  constructor(
    private bandService: BandService,
    private bandEventService: BandEventService) { }

  change(event) {
    this.band = event.target.value;
  }

  click(event) {
    this.search();
  }

  search() {
    if (this.band) {
      this.bandService.load(this.band);
      this.bandEventService.load(this.band);
    }
  }

  ngOnInit() {
  }

}
