import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HodReview } from 'src/app/models/changecontrol.model';

@Injectable({
    providedIn: 'root'
})
export class Hod_ReviewService {

    private apiUrl = 'QAMS_API';

    constructor(private http: HttpClient) { }

    saveHodReview(ccValue: HodReview) {
        
        return this.http.post(this.apiUrl + '/hodreview/savehodreview', JSON.stringify(ccValue));
      }
      updateHodReview(ccValue: HodReview) {
        
        return this.http.post(this.apiUrl + '/hodreview/updatehodreview', JSON.stringify(ccValue));
      }
      gethodreviewbyintid(changeControlId: number) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.apiUrl + '/hodreview/gethodreviewbyintid?initId=' + changeControlId);
      }
}