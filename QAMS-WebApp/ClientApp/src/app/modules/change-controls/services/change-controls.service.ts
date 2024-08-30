import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CC_Model, RequestContext } from 'src/app/models/changecontrol.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeControlsService {
  private apiUrl = 'QAMS_API';
  context: RequestContext = {
    PageNumber: 1,
    PageSize: 100,
    planId: 123 // Example planId
  };
  constructor(private http: HttpClient) { }
  requestOptionsForUpload: any = {
    headers: new HttpHeaders()
  };
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
    return this.http.get(this.apiUrl + '/changecontrolregistration/' + changeControlId);
  }

  getAllChangeControlbyPlant(plantId: number) {

    this.context.planId = plantId;
    //return this.http.get(`${this.apiUrl}/changecontrolregistration/GetAllChangeControlbyPlant`, { this.context, headers });
    return this.http.post(this.apiUrl + '/changecontrolregistration/GetAllChangeControlbyPlant', this.context, this.requestOptionsForUpload)
  }
}
