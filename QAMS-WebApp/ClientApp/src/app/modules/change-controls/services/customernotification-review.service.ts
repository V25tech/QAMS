import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CftReview } from 'src/app/models/cft-review.model';
import { CustomerNotificationReview } from 'src/app/models/customernotification-review.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerNotificationReviewService {

  private apiUrl = 'QAMS_API';

  constructor(private http: HttpClient) { }

  saveCustomerNotificationReview(cnReview: CustomerNotificationReview) {
    return this.http.post(this.apiUrl + '/customernotification/savecustomernotification', JSON.stringify(cnReview));
  }
  updateCustomerNotificationReview(cnReview: CustomerNotificationReview) {
    return this.http.post(this.apiUrl + '/customernotification/updatecustomernotification', JSON.stringify(cnReview));
  }
  getCustomerNotificationReviewByintid(changeControlId: number) {
    return this.http.get(this.apiUrl + '/customernotification/getCftreviewbyintid?initId=' + changeControlId);
  }
}