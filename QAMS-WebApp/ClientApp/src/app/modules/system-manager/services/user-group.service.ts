import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  
  private apiUrl = 'ADMIN_API';
  
  constructor(private http: HttpClient) { }
  
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

  getUserData(): Observable<any> {
    return this.http.post(this.apiUrl+ '/usergroup/getallusergroups',"{\"pageNumber\":1,\"pageSize\":100}");
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
}