import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ActionPlanReviewService {

  private apiUrl = 'QAMS_API';

  constructor(private http: HttpClient) { }

//   saveClosure(closure: Closure) {
//     return this.http.post(this.apiUrl + '/actionplan/saveclosure', JSON.stringify(closure));
//   }
//   updateClosure(closure: Closure) {
//     return this.http.post(this.apiUrl + '/actionplan/updateclosure', JSON.stringify(closure));
//   }
  getActionPlansbyintid(changeControlId: number) {
    return this.http.get(this.apiUrl + '/actionplan/getactionplansbyinitid?initId=' + changeControlId);
  }
}