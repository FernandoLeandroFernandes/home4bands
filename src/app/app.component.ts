import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BandService } from './band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home4Bands';
}
