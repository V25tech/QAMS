import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HodReview, QAReview } from 'src/app/models/changecontrol.model';

@Injectable({
    providedIn: 'root'
})
export class QA_ReviewService {

    private apiUrl = 'QAMS_API';

    constructor(private http: HttpClient) { }

    saveQAReview(ccValue: QAReview) {
        
        return this.http.post(this.apiUrl + '/qareview/saveqareview', JSON.stringify(ccValue));
      }
      updateQAReview(ccValue: QAReview) {
        
        return this.http.post(this.apiUrl + '/qareview/updateqareview', JSON.stringify(ccValue));
      }
      getqareviewbyintid(changeControlId: number) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.apiUrl + '/qareview/getqareviewbyintid?initId=' + changeControlId);
      }
}