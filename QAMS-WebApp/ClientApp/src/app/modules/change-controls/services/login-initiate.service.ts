import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginInitiateService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('assets/json/ccinitiationTypes.json');
  }
  getDocumentData(): Observable<any> {
    return this.http.get('assets/json/document.json');
  }
  getWorkItems():Observable<any>{
    return this.http.get('assets/json/workItems.json');
  }
  getDossierDetails():Observable<any>{
    return this.http.get('assets/json/dossier.json');
  } 
  getCCAuditDetails():Observable<any>{
    return this.http.get('assets/json/ccauditTrials.json');
  } 
}
