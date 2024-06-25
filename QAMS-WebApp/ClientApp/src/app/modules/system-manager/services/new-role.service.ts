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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+'/role/GetAllRole',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }

  updateRoleDetails(settings: Role): Observable<Role> {
 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Role>(this.apiUrl, settings, { headers });
  }

  insertNewRoleDetails(settings: Role) {  
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
    return this.http.post(this.apiUrl+ '/role/saverole', settings, { headers })   ;
  }
  GetRoleById(roleId: number)  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.apiUrl+'/role/'+ roleId, { headers });    
  }
}
