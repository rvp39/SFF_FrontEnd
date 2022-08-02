import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  body: any[] = []

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:35349/api/Admin/";

  getCropsRequests(): Observable <any>{
    return this.http.get<any>(this.baseUrl + "croprequest");
  }


  approveCrop(id: Number): Observable <any>{
    console.log(id);
    return this.http.put<any>(this.baseUrl+"croprequest/update/" + id, this.body)
  }

}
