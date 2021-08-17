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

  deviceList2:Device[]=[]

  id!:Text

  getKeys(obj: {}){
    return Object.keys(obj);
  }

  findByID():void{
    console.log("find by id")
  this.service.FindByCustomerId(this.id).subscribe((data)=>{
    console.log(this.id);
    this.deviceList2=data;
    console.log(this.deviceList2);
    
    }); 
  }
  
  ngOnInit(): void {      
   // this.plan= new Plan()
  }
}