import { Component, OnInit } from '@angular/core';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-estimated-price',
  templateUrl: './estimated-price.component.html',
  styleUrls: ['./estimated-price.component.css']
})
export class EstimatedPriceComponent implements OnInit {

  constructor(private service: TelecomService) { }

  price!:number

  ngOnInit(): void {
    this.service.EstimatedPrice(this.service.id).subscribe((data)=>{

      this.price=data;
      console.log(this.price);
    });
  }

}
