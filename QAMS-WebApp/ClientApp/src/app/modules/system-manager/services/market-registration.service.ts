import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketRegistration} from 'src/app/models/marketRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class MarketRegistrationService {

  private apiUrl = 'ADMIN_API'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getMarketDetails(): Observable<MarketRegistration> {
    return this.http.get<MarketRegistration>(this.apiUrl);
  }
  updateMarketDetails(settings: MarketRegistration): Observable<MarketRegistration> {
    return this.http.put<MarketRegistration>(this.apiUrl, settings);
  }
  getMarketData(): Observable<any> {
    return this.http.post(this.apiUrl+'/market/GetAllMarket',"{  \"pageNumber\": 1,  \"pageSize\": 100,  \"planId\": 1}");
  }
  insertMarketData(settings: MarketRegistration) {   
    return this.http.post(this.apiUrl+ '/market/savemarket', settings);      
  }
  GetMarketById(marketId: number)  {
    return this.http.get(this.apiUrl+'/market/'+ marketId);    
  }
}

