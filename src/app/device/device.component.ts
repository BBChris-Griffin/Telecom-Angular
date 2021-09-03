import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
   }

  deviceList: Device[]=[];

  deviceList2:Device[]=[]

  id!:Text

  originalValue!:Text

  getKeys(obj: {}){
    return Object.keys(obj);
  }

  sendId(id):Text{
    console.log("sendId "+this.id);
    this.id=id;
    return id;

  }

  delete(phoneNumber) {
    this.service.DeleteDevice(phoneNumber).subscribe(data => {
      console.log("Delete Called");
    });
  }

  findByID():void{
    console.log("find by id")
    this.service.id = this.id;
    this.service.FindByCustomerId(this.service.id).subscribe((data)=>{
      console.log(this.service.id);
      this.deviceList2=data;
      console.log(this.deviceList2);
      
      }); 
  }

  initByID(cust_id: Text):void{
    this.service.FindByCustomerId(cust_id).subscribe((data)=>{
      this.deviceList2=data;
      }); 
  }
  
  // Persist Table...
  ngOnInit(): void { 
    if(this.service.id != null) {
      console.log(this.service.name);
      this.initByID(this.service.id);
    }
  }

  updatePhone(event) {
    if(this.originalValue === event.target.innerText) {
      return;
    }
    this.service.UpdatePhoneNumber(this.originalValue, event.target.innerText). subscribe(data => {
      console.log("Update Called");
    });
  }

  editCell(event) {
    var target = event.target;
    target.setAttribute('contenteditable', 'true');
     this.originalValue = target.innerText;
     console.log(this.originalValue);
  }
}