import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantListService {

  constructor(private http: HttpClient) { }
  getplantData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/plantList.json');
  }
}
