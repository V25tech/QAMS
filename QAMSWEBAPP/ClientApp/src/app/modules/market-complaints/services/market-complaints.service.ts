import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketComplaintsService {
 constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('assets/json/market-complaints/marketComplaints.json');
  }
  getDossierData(): Observable<any> {
    return this.http.get('assets/json/market-complaints/mcDossier.json');
  }

}
