import { Component, OnInit } from '@angular/core';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-manage-plans',
  templateUrl: './manage-plans.component.html',
  styleUrls: ['./manage-plans.component.css']
})
export class ManagePlansComponent implements OnInit {

  constructor(private service: TelecomService, private modalService:NgbModal) { }

  planList: Plan[] = [];
  phoneNumber!: Text;
  planID!: Text;
  closeResult!:string;
  

  addPlan(): void{
    this.service.AddPlanIDToDevice(this.planID, this.phoneNumber).subscribe(data => {
      console.log("Plan Added");
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  saveID(planID) {
    this.planID = planID;
    console.log(this.planID);
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.service.findAllPlans().subscribe((data) => {
      this.planList = data;
      console.log(this.planList);
    });
  }

}
