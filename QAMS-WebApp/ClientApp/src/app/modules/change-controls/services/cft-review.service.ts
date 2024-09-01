import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CftReview } from 'src/app/models/cft-review.model';


@Injectable({
  providedIn: 'root'
})
export class CftReviewService {

  private apiUrl = 'QAMS_API';

  constructor(private http: HttpClient) { }

  saveCftReview(cftReview: CftReview) {
    return this.http.post(this.apiUrl + '/cftreview/savecftreview', JSON.stringify(cftReview));
  }
  updateCftReview(cftReview: CftReview) {
    return this.http.post(this.apiUrl + '/cftreview/updatecftreview', JSON.stringify(cftReview));
  }
  getCftreviewbyintid(changeControlId: number) {
    return this.http.get(this.apiUrl + '/cftreview/getcftreviewbyinit?initId=' + changeControlId);
  }
}