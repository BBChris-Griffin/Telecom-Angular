import { Component } from '@angular/core';
import { TelecomService } from './telecom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telecom-angular';
  id = this.service.id;
  constructor(private service:TelecomService){}
}
