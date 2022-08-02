import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FarmerserviceService } from 'src/app/Services/farmerservice.service';
import { CropAuctionDetail } from 'src/app/Models/Farmer/CropAuctionDetail';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  marketcropList: CropAuctionDetail[] = [];
  constructor(private _service : FarmerserviceService, private router: Router) { }


  ngOnInit(): void {
    this._service.getMarketplaceCrops().subscribe(data => {
      this.marketcropList = data;
    })
  }

}
