import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeControlsService {
  private apiUrl = 'your-api-url'; 

  constructor(private http: HttpClient) { }

  getActionPlansbyChangeControlId(id: number): Observable<any> {
    //const url = `${this.apiUrl}/${id}`;
    return this.http.get('assets/json/actionPlans.json');
  }
}
