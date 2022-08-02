import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerserviceService } from 'src/app/Services/farmerservice.service';
import { SoldCrop } from 'src/app/Models/Farmer/SoldCrop';

@Component({
  selector: 'app-sold-history',
  templateUrl: './sold-history.component.html',
  styleUrls: ['./sold-history.component.css']
})
export class SoldHistoryComponent implements OnInit {
  soldlist: SoldCrop[] = [];
  constructor(private _service: FarmerserviceService, private router: Router) { }

  ngOnInit(): void {
    this._service.getSoldCrops(401).subscribe(data => {
      this.soldlist = data;
      console.log(this.soldlist);
    })
  }

}
