import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRegistration} from 'src/app/models/customerRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {

  private apiUrl = 'your-api-url/customer-Registration'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getCustomerDetails(): Observable<CustomerRegistration> {
    return this.http.get<CustomerRegistration>(this.apiUrl);
  }

  updateCustomerDetails(settings: CustomerRegistration): Observable<CustomerRegistration> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<CustomerRegistration>(this.apiUrl, settings, { headers });
  }
  getCustomerData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/customers.json');
  }
}
