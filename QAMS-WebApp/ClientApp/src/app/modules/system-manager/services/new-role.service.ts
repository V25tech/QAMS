import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/newRole.model';

@Injectable({
  providedIn: 'root'
})
export class NewRoleService {
  private apiUrl = 'ADMIN_API';
  constructor(private http: HttpClient) { }
  getnewRoleData(): Observable<any> {    
  return this.http.post(this.apiUrl+'/role/GetAllRole',"{\"pageNumber\":1,\"pageSize\":100}");
  }

  updateRoleDetails(settings: Role): Observable<Role> {
    return this.http.put<Role>(this.apiUrl, settings);
  }

  insertNewRoleDetails(settings: Role) {         
    return this.http.post(this.apiUrl+ '/role/saverole', settings);
  }
  GetRoleById(roleId: number)  {   
    return this.http.get(this.apiUrl+'/role/'+ roleId);    
  }
}
