import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CftReview } from 'src/app/models/cft-review.model';


@Injectable({
  providedIn: 'root'
})
export class QaDecisionService {

  private apiUrl = 'QAMS_API';

  constructor(private http: HttpClient) { }

  saveQaDecision(cftReview: CftReview) {
    return this.http.post(this.apiUrl + '/qadecision/saveqadecision', JSON.stringify(cftReview));
  }
  updateQaDecision(cftReview: CftReview) {
    return this.http.post(this.apiUrl + '/qadecision/updateqadecision', JSON.stringify(cftReview));
  }
  getQaDecisionbyintid(changeControlId: number) {
    return this.http.get(this.apiUrl + '/qadecision/getqadecisionbyInitid?initId=' + changeControlId);
  }
}