import { Component, OnInit } from '@angular/core';
import { Bidder } from 'src/app/Models/Reg/bidder';
import { RegserviceService } from 'src/app/Services/regservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {
  
  constructor(private _service: RegserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(bidder : Bidder){
    bidder.is_approved=false;
    bidder.is_active=true;
    bidder.aadhar="uploded";
    bidder.pan="uploded";
    bidder.trader_license="uploded";
    this._service.addBidder(bidder).subscribe(()=>{this.router.navigate(["home"])})
  }

}
