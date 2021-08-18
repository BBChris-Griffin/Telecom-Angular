import { Component, OnInit } from '@angular/core';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-delete-device',
  templateUrl: './delete-device.component.html',
  styleUrls: ['./delete-device.component.css']
})
export class DeleteDeviceComponent implements OnInit {

  constructor(private service: TelecomService) { }

  phoneNumber!: Text;

  deleteDevice():void {
    this.service.DeleteDevice(this.phoneNumber).subscribe(data => {
      console.log("Delete Called");
    });
  }

  ngOnInit(): void {
  }

}
