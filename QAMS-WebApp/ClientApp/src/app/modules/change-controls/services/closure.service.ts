import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Closure } from 'src/app/models/closure.model';

@Injectable({
  providedIn: 'root'
})
export class ClosureService {

  private apiUrl = 'QAMS_API';

  constructor(private http: HttpClient) { }

  saveClosure(closure: Closure) {
    return this.http.post(this.apiUrl + '/closure/saveclosure', JSON.stringify(closure));
  }
  updateClosure(closure: Closure) {
    return this.http.post(this.apiUrl + '/closure/updateclosure', JSON.stringify(closure));
  }
  getClosurebyintid(changeControlId: number) {
    return this.http.get(this.apiUrl + '/closure/getclosurebyInitId?initId=' + changeControlId);
  }
}