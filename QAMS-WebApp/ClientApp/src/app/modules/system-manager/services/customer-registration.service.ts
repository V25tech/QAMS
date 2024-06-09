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
  requestOptionsForUpload: any = {
    headers: new HttpHeaders()
};

  getCustomerDetails(): Observable<CustomerRegistration> {
    return this.http.get<CustomerRegistration>(this.apiUrl);
  }

  updateCustomerDetails(settings: CustomerRegistration): Observable<CustomerRegistration> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<CustomerRegistration>(this.apiUrl, settings, { headers });
  }
  insertCustomerDetails(settings: CustomerRegistration) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ '/customer/savecustomer', settings, { headers })

    //return this.http.post(this.apiUrl + '/customer/savecustomer', settings,{  });    
  }
  getCustomerData(): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/customer/GetAllCustomer',"{\"pageNumber\":1,\"pageSize\":100,\"planId\":1}", { headers });
  }
}
