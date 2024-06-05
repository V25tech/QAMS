import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchLotParticulars } from 'src/app/models/BatchLotParticulars.model';
import { SecuritySettings } from 'src/app/models/SecuritySettings.model';

@Injectable({
  providedIn: 'root'
})
export class BatchLotServicesService {

  private apiUrl = 'your-api-url/batch-Lot'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getBatchLotDetails(): Observable<BatchLotParticulars> {
    return this.http.get<BatchLotParticulars>(this.apiUrl);
  }

  updateBatchLotDetails(settings: BatchLotParticulars): Observable<BatchLotParticulars> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<BatchLotParticulars>(this.apiUrl, settings, { headers });
  }
  getBatchLotData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/batchLotParticulars.json');
  }
}
