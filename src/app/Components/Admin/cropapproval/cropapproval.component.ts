import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropAuctionDetail } from 'src/app/Models/Farmer/CropAuctionDetail';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-cropapproval',
  templateUrl: './cropapproval.component.html',
  styleUrls: ['./cropapproval.component.css']
})
export class CropapprovalComponent implements OnInit {


  croprequest: CropAuctionDetail[] = [];

  constructor(private _services: AdminserviceService, private router: Router) { }

  ngOnInit(): void {

    this._services.getCropsRequests().subscribe(data =>{
      this.croprequest = data;
      console.log(data);
    })
  }

  approve(id: Number) {
    console.log(id);
    this._services.approveCrop(id).subscribe(data =>{
      this.router.navigate(['home'])
    })
  }

}
