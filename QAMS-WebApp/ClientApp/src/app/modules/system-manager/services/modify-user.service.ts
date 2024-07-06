import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModifyUser, RegModifyUser } from 'src/app/models/modifyUser.model';

@Injectable({
  providedIn: 'root'
})
export class ModifyUserService {

  private apiUrl = 'ADMIN_API';

  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {    
    
    return this.http.post(this.apiUrl+ '/user/GetAllUser',"{\"pageNumber\":1,\"pageSize\":100}");
  }
  insertUserDetails(settings: RegModifyUser) {  
      
    return this.http.post(this.apiUrl+ '/user/saveuser', settings)    
  }
  updateUserDetails(settings: RegModifyUser) { 
    
    return this.http.post(this.apiUrl+ '/user/updateuser', settings)       
  }
  GetUserById(userId: number)  {    
    
    return this.http.get(this.apiUrl+'/user/'+ userId);    
  }
}
