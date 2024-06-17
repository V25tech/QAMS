import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegUserGroup, UserGroup } from 'src/app/models/userGroup.model';
// import { RegUserGroup } from 'src/app/models/userGroup.model';

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
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ '/usergroup/getallusergroups',"{\"pageNumber\":1,\"pageSize\":100}",{ headers });
  }
  insertCustomerDetails(settings: RegUserGroup) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ '/usergroup/saveusergroup', settings, { headers })

    //return this.http.post(this.apiUrl + '/customer/savecustomer', settings,{  });    
  }
  getProductsSmall() {

    return Promise.resolve(this.getProductsData().slice(0, 10));
}
UpdateUserGroupDetails(settings: RegUserGroup) {    
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.apiUrl+ '/usergroup/updateusergroup', settings, { headers })       
}
GetUserGroupById(usergroupId: number)  {
  //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.get(this.apiUrl+'/usergroup/'+ usergroupId);    
}

}