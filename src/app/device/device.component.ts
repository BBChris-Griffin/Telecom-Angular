import { Component, OnInit } from '@angular/core';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';

import Plan from '../models/Plan';
//import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private service:TelecomService) {
    //document.getElementById("phone-number")?.addEventListener("click", this.editCell);
   }

  deviceList: Device[]=[];
  device: Device = new Device();
  
  ngOnInit(): void {
    
   // this.plan= new Plan()
    this.service.FindAllDevices().subscribe((data)=>{
      this.deviceList=data;
      console.log(this.deviceList);
      
    });
  }

}