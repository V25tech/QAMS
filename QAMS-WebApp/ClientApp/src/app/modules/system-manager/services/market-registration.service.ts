import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketRegistration} from 'src/app/models/marketRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class MarketRegistrationService {

  private apiUrl = 'your-api-url/market-Registration'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getMarketDetails(): Observable<MarketRegistration> {
    return this.http.get<MarketRegistration>(this.apiUrl);
  }

  updateMarketDetails(settings: MarketRegistration): Observable<MarketRegistration> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<MarketRegistration>(this.apiUrl, settings, { headers });
  }
  getMarketData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/market.json');
  }
}
