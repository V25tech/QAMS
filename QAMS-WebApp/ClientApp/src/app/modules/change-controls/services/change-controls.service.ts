import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CC_Model } from 'src/app/models/changecontrol.model';

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

  saveChangeControlRegistration(ccValue: CC_Model) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/changecontrolregistration/savechangecontrolregistration', JSON.stringify(ccValue), { headers });
  }

  getChangeControlById(changeControlId: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('/changecontrolregistration/' + changeControlId, { headers });
  }


}
