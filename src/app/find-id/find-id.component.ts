import { Text } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { DeviceComponent } from '../device/device.component';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';


@Component({


  selector: 'app-find-id',  
  templateUrl: './find-id.component.html',

  styleUrls: ['./find-id.component.css'],

})
export class FindIdComponent implements OnInit {

  constructor(private service:TelecomService) { }


  id!:Text
  deviceList2:Device[]=[]

  @Output() send = new EventEmitter<Text>();

  
  sendID() {
    this.send.emit(this.id);
    console.log(this.id);

  }






  

  ngOnInit(): void {
  }

}
