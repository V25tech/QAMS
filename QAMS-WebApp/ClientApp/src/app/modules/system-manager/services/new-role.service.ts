import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewRoleService {

  constructor(private http: HttpClient) { }
  getnewRoleData(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/role/GetAllRole',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }
}
