import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TelecomService } from './telecom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'telecom-angular';  
  hello!:any
  constructor(private service: TelecomService) { }

  
  ngOnInit(){
    //await new Promise(f => setTimeout(f, 5000));
    console.log("ID " + sessionStorage.getItem('id'))
    this.hello = sessionStorage.getItem('id')
    this.service.loggedIn = (sessionStorage.getItem('loggedIn') === 'true');
    this.service.id = this.hello
    console.log("Hey" + this.service.id)
  }
}
