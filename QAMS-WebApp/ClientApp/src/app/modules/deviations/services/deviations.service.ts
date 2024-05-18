import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviationsService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('assets/json/deviations/deviations-initiationTypes.json');
  }
  getDocumentData(): Observable<any> {
    return this.http.get('assets/json/deviations/deviations-document.json');
  }
  getWorkItems():Observable<any>{
    return this.http.get('assets/json/deviations/deviations-workItems.json');
  }
  getDossierDetails():Observable<any>{
    return this.http.get('assets/json/deviations/deviation-dossier.json');
  } 
  getDeviationAuditDetails():Observable<any>{
    return this.http.get('assets/json/deviations/deviations-ccauditTrials.json');
  } 
  getDeviationActionPlans(id: number): Observable<any> {
    return this.http.get('assets/json/deviations/deviations-actionPlans.json');
  }
}
 
  
