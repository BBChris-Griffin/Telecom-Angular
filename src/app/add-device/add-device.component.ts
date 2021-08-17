import { Component, OnInit } from '@angular/core';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  device: Device = new Device();
  
  constructor(private service: TelecomService) { }

  save(): void {
    console.log(this.device.phoneNumber);
    this.service.AddDevice(this.device).subscribe(data => {
      console.log(data);
    });
  }
  ngOnInit(): void {
  }

}
