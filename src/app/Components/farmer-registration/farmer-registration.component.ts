import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { RegserviceService } from 'src/app/Services/regservice.service';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/Models/Reg/farmer';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {

  constructor(private _service: RegserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(Farmer : Farmer){
    Farmer.is_approved=false;
    Farmer.is_active=true;
    Farmer.aadhar="uploded";
    Farmer.pan="uploded";
    Farmer.certificate="uploded";
    this._service.addFarmer(Farmer).subscribe(()=>{this.router.navigate(["home"])})
  }
}
