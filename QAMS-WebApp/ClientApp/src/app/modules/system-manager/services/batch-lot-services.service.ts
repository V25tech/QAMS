import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchLotParticulars } from 'src/app/models/BatchLotParticulars.model';
import { SecuritySettings } from 'src/app/models/SecuritySettings.model';

@Injectable({
  providedIn: 'root'
})
export class BatchLotServicesService {

  private apiUrl = 'ADMIN_API'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getBatchLotDetails(): Observable<BatchLotParticulars> {
    return this.http.get<BatchLotParticulars>(this.apiUrl);
  }

  updateBatchLotDetails(settings: BatchLotParticulars): Observable<BatchLotParticulars> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<BatchLotParticulars>(this.apiUrl, settings, { headers });
  }
  // getBatchLotData(): Observable<any> {
  //   return this.http.get('assets/json/SystemManager/batchLotParticulars.json');
  // }

  getBatchLotData(): Observable<any> {
    debugger;
   // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.apiUrl+'/batchdetails/GetAllBatchDetails');
  }
  insertBatchDetails(settings: BatchLotParticulars) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ '/batchdetails/savebatchdetails', settings, { headers });
    //return this.http.post(this.apiUrl + '/customer/savecustomer', settings,{  });    
  }  
 UpdateBatchDetails(settings: BatchLotParticulars) {    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ '/batchdetails/updatebatchdetails', settings, { headers })      
  }
  GetBatchDetailsById(batchLotParticularsId: number)  {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.apiUrl+'/batchdetails/'+ batchLotParticularsId);    
  }
}
