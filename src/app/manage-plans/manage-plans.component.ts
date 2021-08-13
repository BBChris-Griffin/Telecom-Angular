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
  ngOnInit(): void {
    this.service.findAllPlans().subscribe((data) => {
      this.planList = data;
      console.log(this.planList);
    });
  }

}
