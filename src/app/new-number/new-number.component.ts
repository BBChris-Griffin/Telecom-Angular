import { Component, OnInit } from '@angular/core';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-new-number',
  templateUrl: './new-number.component.html',
  styleUrls: ['./new-number.component.css']
})
export class NewNumberComponent implements OnInit {

  constructor(private service: TelecomService) { }

  oldPhoneNumber!: Text;
  newPhoneNumber!: Text;

  updatePhoneNumber() : void{
    this.service.UpdatePhoneNumber(this.oldPhoneNumber, this.newPhoneNumber).subscribe(data => {
      console.log("Update Called");
    });
  }

  ngOnInit(): void {
  }

}
