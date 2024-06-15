import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentRegistration } from 'src/app/models/equipmentRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentRegistrationService {

  //private apiUrl = 'your-api-url/equipment-Registration'; // Replace with your actual API URL
  private apiUrl = 'ADMIN_API';

  constructor(private http: HttpClient) { }

  getMarketDetails(): Observable<EquipmentRegistration> {
    return this.http.get<EquipmentRegistration>(this.apiUrl);
  }

  updateMarketDetails(settings: EquipmentRegistration): Observable<EquipmentRegistration> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<EquipmentRegistration>(this.apiUrl, settings, { headers });
  }

  getEquipData(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/equipment/GetAllEquipment',"{\"pageNumber\":1,\"pageSize\":100,\"planId\":1}", { headers });
  }

  insertCustomerDetails(settings: EquipmentRegistration) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ '/equipment/saveequipment', settings, { headers })

    //return this.http.post(this.apiUrl + '/customer/savecustomer', settings,{  });    
  }

  updateEquipmentDetails(settings: EquipmentRegistration) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ '/equipment/updateequipment', settings, { headers })

    //return this.http.post(this.apiUrl + '/customer/savecustomer', settings,{  });    
  }

}
