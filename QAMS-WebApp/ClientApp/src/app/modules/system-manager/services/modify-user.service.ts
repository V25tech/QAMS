import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyUserService {

  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/modifyUser.json');
  }
}
