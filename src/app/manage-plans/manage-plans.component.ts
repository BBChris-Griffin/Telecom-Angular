import { Component, OnInit } from '@angular/core';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

@Component({
  selector: 'app-manage-plans',
  templateUrl: './manage-plans.component.html',
  styleUrls: ['./manage-plans.component.css']
})
export class ManagePlansComponent implements OnInit {

  constructor(private service: TelecomService) { }

  planList: Plan[] = [];
  phoneNumber!: Text;
  planID!: Text;
  

  addPlan(): void{
    this.service.AddPlanIDToDevice(this.planID, this.phoneNumber).subscribe(data => {
      console.log("Plan Added");
    });
  }

  openModal(): void {
    // var text = document.getElementById('movie-change');
    // text.innerText = "Thanks for the Submission!";
    $('#confirm-modal').modal('show')
    console.log("FF");
  }

  ngOnInit(): void {
    this.service.findAllPlans().subscribe((data) => {
      this.planList = data;
      console.log(this.planList);
    });
  }

}
