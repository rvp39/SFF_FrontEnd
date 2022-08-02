import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SoldCrop } from '../Models/Farmer/SoldCrop';
import { CropAuctionDetail } from '../Models/Farmer/CropAuctionDetail';
import { MarketBid } from '../Models/Farmer/MarketBid';
import { CropDetail } from '../Models/Farmer/CropDetail';

@Injectable({
  providedIn: 'root'
})
export class FarmerserviceService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:35349/api/CropAuctionDetail";
  baseUrl2 = "http://localhost:35349/api/Marketplace";


  getSoldCrops(id: Number): Observable <any>{
    return this.http.get<SoldCrop>(`${this.baseUrl + "/soldcrops"}/${id}`);
  }

  addCropToAuction(newcrop: CropAuctionDetail): Observable<any>{
    return this.http.post<CropAuctionDetail>(this.baseUrl + "/sellrequest", newcrop)
  }

  // getCropsForMarketplace(): Observable <any>{
  //   return this.http.get<any>(this.baseUrl + "/marketplace");
  // }

  getMarketplaceCrops(): Observable <any>{
    return this.http.get<any>(this.baseUrl2)
  }  

  getCurrentBid(id: Number): Observable <any>{
    return this.http.get<MarketBid>(this.baseUrl2 + "/currentbid/" + id);
  }

  getPreviousBids(id: Number): Observable <any>{
    return this.http.get<MarketBid>(this.baseUrl2 + "/previousbids/" + id);
  }

  getAllCrops(croptype: any): Observable <any>{
    return this.http.get<CropDetail>(this.baseUrl + "/cropdetails/" + croptype);
  }
}
