import { Component, OnInit } from '@angular/core';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';

import Plan from '../models/Plan';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private service:TelecomService) { }

  deviceList: Device[]=[];

  deviceList2:Device[]=[]

  getKeys(obj: {}){
    return Object.keys(obj);
  }
  
  ngOnInit(): void {

    this.service.FindByCustomerId().subscribe((data)=>{
      this.deviceList2=data;
      console.log(this.deviceList2);
      
    });
    
   // this.plan= new Plan()
    this.service.FindAllDevices().subscribe((data)=>{
      this.deviceList=data;
      console.log(this.deviceList);
      
    });
  }

}
