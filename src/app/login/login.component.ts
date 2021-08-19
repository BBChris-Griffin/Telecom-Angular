import { Component, OnInit } from '@angular/core';
import { TelecomService } from '../telecom.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:TelecomService,private router: Router) { }

  id!:Text;
  password!:Text;
  check!:Boolean;

  passwordCheck():void{
    this.service.check=false;
    console.log("Password Check");
    console.log(this.id);
    console.log(this.password);

    this.service.Login(this.id, this.password).subscribe((data)=>{
      this.check=data;
      this.service.check=data;
      this.service.id=this.id;
      console.log(this.service.check);
      if(this.service.check!=true){
        alert("incorrect password or user name")


      }

      if(this.service.check==true){
        console.log(this.service.check+"service check login")
        this.router.navigateByUrl('/plans');

      }

    });


  }

  ngOnInit(): void {


  }

}
