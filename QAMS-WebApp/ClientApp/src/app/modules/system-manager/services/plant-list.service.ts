import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantListService {

  constructor(private http: HttpClient) { }
  getplantData(): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/plant/GetAllPlant',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }
}
