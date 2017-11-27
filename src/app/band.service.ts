import { Band } from './band';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BandService {

  private state$ = new BehaviorSubject<any>('EMPTY');

  store(bands) {
    this.state$.next({});
    this.state$.next(bands);
  }

  read(): Observable<any> {
    return this.state$.asObservable();
  }

  constructor(private http: Http) { }

  load(band): Promise<Band[]> {

        return this.http
                  .get('https://rest.bandsintown.com/artists/' + band + '?app_id=Home4Bands')
                  .toPromise()
                  .then(response => {
                      this.store(response.json() as Band[]);
                      return this.read();
                  })
                  .catch(this.handleError);
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred. Message: ', error);
        return Promise.reject(error.message || error);
      }
}
