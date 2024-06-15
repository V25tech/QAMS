import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantList, RegPlant } from 'src/app/models/plantList.model';

@Injectable({
  providedIn: 'root'
})
export class PlantListService {

  private apiUrl = 'ADMIN_API';

  constructor(private http: HttpClient) { }
 
  getplantData(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/plant/GetAllPlant',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }
  insertPlantDetails(settings: RegPlant) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ '/plant/saveplant', settings, { headers })

    //return this.http.post(this.apiUrl + '/customer/savecustomer', settings,{  });    
  }
}
