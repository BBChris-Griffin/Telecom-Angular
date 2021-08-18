import { Component, Input, OnInit } from '@angular/core';
import Device from '../models/Device';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-add-device',
  // template: `
  // User: {{userID}}
  // <app-device (send)="receiveMessage($event)"></app-device>`,
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  device: Device = new Device();
  userID: Text = new Text();
  excess!: ArrayBuffer;
  constructor(private service: TelecomService) { }

  receiveMessage($event) {
    console.log("Hey");
    this.userID = $event;
  }

  save(): void {
    console.log(this.userID);
    this.service.AddDevice(this.device).subscribe(data => {
      console.log(data);
    });
    this.service.AddUserIDToDevice(this.userID, this.device.phoneNumber).subscribe(data => {
      this.excess = data;
    })
  }
  ngOnInit(): void {
  }

}
