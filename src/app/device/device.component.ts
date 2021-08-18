import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';

import Plan from '../models/Plan';
//import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-device',
  template:`<app-find-id (send) = "receiveMessage($event)"></app-find-id> user:{{id}}`,
//  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
  

})
export class DeviceComponent implements OnInit {

  constructor(private service:TelecomService) {
   }

  deviceList: Device[]=[];
  id!:Text


  deviceList3:Device[]=[];
  getKeys(obj: {}){
    return Object.keys(obj);
  }

  findByID():void{
    console.log("find by id")
    this.service.id = this.id;
    console.log("id in find-id component"+this.id)
  this.service.FindByCustomerId(this.service.id).subscribe((data)=>{
    console.log("id in service "+this.service.id);
    this.service.deviceList2=data;
    console.log(data);
    console.log("service device list"+this.service.deviceList2);
    
    
    
    }); 
  }
 
  receiveMessage($event){
    console.log(this.id +"id in parent")
     this.id=$event
  }
  ngOnInit(): void {      
   // this.plan= new Plan()
  }
}