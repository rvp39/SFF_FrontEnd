import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerserviceService } from 'src/app/Services/farmerservice.service';
import { CropAuctionDetail } from 'src/app/Models/Farmer/CropAuctionDetail';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {

  croptypechoice: string;
  selectedcroptype=null
  selectedfertilizer="Chemical"
  selectedcrop=null
  cropTypes: any = ['Kharif','Rabi'];
  cropNames: any = [];

  constructor(private _service: FarmerserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(cropDetails: CropAuctionDetail){
    cropDetails.user_id = 401;
    cropDetails.sold_date = new Date();
    cropDetails.sold_price = 0;
    cropDetails.total_price = 0;
    cropDetails.soil_ph_certificate = "uploded";
    cropDetails.is_sold = false;
    cropDetails.is_approved = true;

    for(var crop of this.cropNames){
      if(crop.crop_name == this.selectedcrop){
        cropDetails.msp = crop.msp;
      }
    }
    this._service.addCropToAuction(cropDetails).subscribe(data => {
      console.log(data);
      this.router.navigate(["home"]);
    });
  }

  selectCropType(e: any){
    console.log(e.target.value);
    this.cropNames.splice(0);
    this.croptypechoice = e.target.value;
    this._service.getAllCrops(this.croptypechoice).subscribe(data => {
      this.cropNames = data;
    })
  }

  selectCrop(e: any){
    console.log(e.target.value);
    this.selectedcrop = e.target.value;
  }
}
