import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecuritySettings } from '../../../models/SecuritySettings.model';

@Injectable({
  providedIn: 'root'
})
export class SecuritySettingsService {
  private apiUrl = 'your-api-url/security-settings'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getSecuritySettings(): Observable<SecuritySettings> {
    return this.http.get<SecuritySettings>(this.apiUrl);
  }

  updateSecuritySettings(settings: SecuritySettings): Observable<SecuritySettings> {    
    return this.http.put<SecuritySettings>(this.apiUrl, settings);
  }
}