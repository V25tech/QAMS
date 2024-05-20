import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  getProductsData() {
    return [
        {
           
            name: 'Administrator',
            
        },
        {
           
            name: 'Reviewer',
           
        },
        {
           
            name: 'Initiator',
           
        },
        {
         
            name: 'Approver',
           
        }
       
    ];
}
  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {
   
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/usergroup/getallusergroups',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
}