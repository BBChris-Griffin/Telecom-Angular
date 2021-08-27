import { Component, OnInit } from '@angular/core';
import { TelecomService } from '../telecom.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:TelecomService, private router: Router, private http: HttpClient ) { }

  name!:Text;
  password!:Text;
  check!:Boolean;
  user!: User;

  // passwordCheck():void{
  //   this.service.check=false;
  //   console.log("Password Check");
  //   
  //   console.log(this.password);

  //   this.service.LoginAgain().subscribe((data) =>{

  //   });

  //   this.service.Login(this.id, this.password).subscribe((data)=>{
  //     this.check=data;
  //     this.service.check=data;
  //     this.service.id=this.id;
  //     console.log(this.service.check);
  //     if(this.service.check!=true){
  //       alert("incorrect password or user name")


  //     }

  //     if(this.service.check==true){
  //       console.log(this.service.check+"service check login")
  //       this.router.navigateByUrl('/device');

  //     }

  //   });


  // }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');

  }

  login() {
    let url = 'http://localhost:9001/telecom/login';
      this.http.post<Observable<boolean>>(url, {
        name: this.name,
        password: this.password
    }).subscribe(isValid => {
      console.log(this.name + " " + this.password);

        if (isValid) {
            sessionStorage.setItem(
              'token', 
              btoa(this.name + ':' + this.password)
            );
            console.log(btoa(this.name + ':' + this.password));
      this.router.navigate(['device']);
        } else {
            alert("Authentication failed.")
        }
    });
  }

}
