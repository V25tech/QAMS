import { HttpClient } from '@angular/common/http';
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
    return this.http.post('http://localhost:54456/api/usergroup/getusergroups',"{\"pageNumber\":1,\"pageSize\":100}");
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
}