import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-estimated-price',
  templateUrl: './estimated-price.component.html',
  styleUrls: ['./estimated-price.component.css']
})
export class EstimatedPriceComponent implements OnInit {

  constructor(private service: TelecomService, private router: Router) { }

  price!:number
  id!:Text;
  @Input() childId!:Text


  
  ShowEstimatedPrice():void{
    console.log(this.price)
    this.id=this.service.id;
    this.service.EstimatedPrice(this.service.id).subscribe((data)=>{
      

      this.price=data;
      console.log(this.price);
    });
  }

  Logout():void{
    this.id=new Text('');
    this.price=0;
    this.service.id=new Text('');
    this.router.navigateByUrl('');



    };
  
  

  
  ngOnInit(): void  { 
    /*
    this.service.EstimatedPrice(this.service.id).subscribe((data)=>{
      

      this.price=data;
      console.log(this.price);
    });

    */
 

}
}

