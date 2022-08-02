import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerserviceService } from 'src/app/Services/farmerservice.service';
import { MarketBid } from 'src/app/Models/Farmer/MarketBid';

@Component({
  selector: 'app-crop-bids',
  templateUrl: './crop-bids.component.html',
  styleUrls: ['./crop-bids.component.css']
})
export class CropBidsComponent implements OnInit {

  @Input() crop_auction_id: Number;

  currentBid: MarketBid[] = [];
  previousBids: MarketBid[] =[];

  constructor(private _service: FarmerserviceService, private router: Router) { }

  ngOnInit(): void {
    this._service.getCurrentBid(this.crop_auction_id).subscribe(data => {
      this.currentBid = data;
    })

    this._service.getPreviousBids(this.crop_auction_id).subscribe(data => {
      this.previousBids = data;
    })
  }

}
