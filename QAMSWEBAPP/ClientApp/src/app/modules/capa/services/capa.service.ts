import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapaService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('assets/json/capa/capaDetails.json');
  }
  getCapaActionPlans(id: number): Observable<any> {
    return this.http.get('assets/json/capa/capaActionPlans.json');
  }
  getCapaDossierPrint(): Observable<any> {
    return this.http.get('assets/json/capa/capaDossier.json');
  }
  getDocumentData(): Observable<any> {
    return this.http.get('assets/json/capa/capaDocument.json');
  }
  getCapaAuditDetails():Observable<any>{
    return this.http.get('assets/json/capa/capaAuditTrails.json');
  } 
}
