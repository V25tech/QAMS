import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRegistration} from 'src/app/models/customerRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {

  private apiUrl ='ADMIN_API' ; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getCustomerDetails(): Observable<CustomerRegistration> {
    return this.http.get<CustomerRegistration>(this.apiUrl);
  }

  updateCustomerDetails(settings: CustomerRegistration): Observable<CustomerRegistration> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<CustomerRegistration>(this.apiUrl, settings, { headers });
  }
  insertCustomerDetails(settings: CustomerRegistration): Observable<CustomerRegistration> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CustomerRegistration>(this.apiUrl + '/customer/savecustomer', JSON.stringify(settings));    
  }
  getCustomerData(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/customer/GetAllCustomer',"{\"pageNumber\":1,\"pageSize\":100,\"planId\":1}", { headers });
  }
}
