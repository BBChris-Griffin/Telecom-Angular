import { Component, OnInit } from '@angular/core';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';

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

  ngOnInit(): void {
    this.service.findAllPlans().subscribe((data) => {
      this.planList = data;
      console.log(this.planList);
    });
  }

}
