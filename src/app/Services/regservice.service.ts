import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Bidder } from '../Models/Reg/bidder';
import { Farmer } from '../Models/Reg/farmer';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor(private http: HttpClient) { }
   baseUr1="";//bidder api url
   baseUr2="";//farmer api url

//registering new bidder
addBidder(bidder : Bidder): Observable<any>{
  return this.http.post<Bidder>(this.baseUr1,bidder)//add api url
}
addFarmer(farmer : Farmer): Observable<any>{
  return this.http.post<Farmer>(this.baseUr2,farmer)//add api url
}
}

