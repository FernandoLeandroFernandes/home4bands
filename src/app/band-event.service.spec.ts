import { TestBed, inject } from '@angular/core/testing';

import { BandEventService } from './band-event.service';

describe('BandEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandEventService]
    });
  });

  it('should be created', inject([BandEventService], (service: BandEventService) => {
    expect(service).toBeTruthy();
  }));
});
