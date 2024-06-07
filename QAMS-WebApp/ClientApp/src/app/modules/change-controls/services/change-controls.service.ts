import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CC_Model } from 'src/app/models/changecontrol.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeControlsService {
  private apiUrl = 'QAMS_API';

  constructor(private http: HttpClient) { }

  getActionPlansbyChangeControlId(id: number): Observable<any> {
    //const url = `${this.apiUrl}/${id}`;
    return this.http.get('assets/json/actionPlans.json');
  }

  saveChangeControlRegistration(ccValue: CC_Model) {
    return this.http.post(this.apiUrl + '/changecontrolregistration/savechangecontrolregistration', JSON.stringify(ccValue));
  }

  updateChangeControlRegistration(ccValue: CC_Model) {
    return this.http.post(this.apiUrl + '/changecontrolregistration/updatechangecontrolregistration', JSON.stringify(ccValue));
  }

  getChangeControlById(changeControlId: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.apiUrl + '/changecontrolregistration/' + changeControlId);
  }

  getAllChangeControlbyPlant(plantId: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl + '/changecontrolregistration/GetAllChangeControlbyPlant',"{\"pageNumber\":1,\"pageSize\":100, \"planId\":2}");
  }

}
