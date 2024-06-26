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
    return this.http.post(this.apiUrl+ '/usergroup/getallusergroups',"{\"pageNumber\":1,\"pageSize\":100}");
  }
  insertCustomerDetails(settings: RegUserGroup) {  
    return this.http.post(this.apiUrl+ '/usergroup/saveusergroup', settings)   
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
UpdateUserGroupDetails(settings: RegUserGroup) {    
  return this.http.post(this.apiUrl+ '/usergroup/updateusergroup', settings)       
}
GetUserGroupById(usergroupId: number)  {
  return this.http.get(this.apiUrl+'/usergroup/'+ usergroupId);    
}

}