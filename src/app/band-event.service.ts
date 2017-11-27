import { BandEvent } from './band-event';
import { Band } from './band';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BandEventService {

  private state$ = new BehaviorSubject<any>('EMPTY');

  store(bandEvents) {
    this.state$.next(bandEvents);
  }

  read(): Observable<any> {
    return this.state$.asObservable();
  }

  constructor(private http: Http) { }

  load(band): Promise<Band[]> {

        return this.http
                  .get('https://rest.bandsintown.com/artists/' + band + '/events?app_id=Home4Bands')
                  .toPromise()
                  .then(response => {
                      this.store(response.json() as BandEvent[]);
                      return this.read();
                  })
                  .catch(this.handleError);
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred. Message: ', error);
        return Promise.reject(error.message || error);
      }
}
