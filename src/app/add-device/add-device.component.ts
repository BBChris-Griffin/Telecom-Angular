import { Component, Input, OnInit } from '@angular/core';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  device: Device = new Device();
  userID: Text = new Text();
  excess!: ArrayBuffer;
  constructor(private service: TelecomService) { }

  save(): void {
    this.userID = this.service.id;
    console.log("hello"+this.service.id);
    var phone = this.device.phoneNumber;
    this.service.AddDevice(this.device).subscribe(data => {
      console.log(data);
      this.service.AddUserIDToDevice(this.userID, phone).subscribe(data => {
        this.excess = data;
        console.log(phone);
      })
    });
  }
  ngOnInit(): void {
  }

}
