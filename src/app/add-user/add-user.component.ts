import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  constructor(private service: TelecomService) { }

  save(): void {
    this.user.role = "USER";
    this.service.AddUser(this.user).subscribe(data => {
      console.log(data);
      //this.service.id = data.customerId;
    });
  }

  ngOnInit(): void {
  }

}
