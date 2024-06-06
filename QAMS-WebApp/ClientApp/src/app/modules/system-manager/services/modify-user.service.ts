import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyUserService {

  private apiUrl = 'ADMIN_API';

  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ '/user/GetAllUser',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }
}
