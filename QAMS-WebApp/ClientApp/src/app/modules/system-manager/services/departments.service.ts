import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRegistration } from 'src/app/models/customerRegistration.model';
import { RegNewdepartment } from 'src/app/models/departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  
  private apiUrl ='ADMIN_API' ; // Replace with your actual API URL

  constructor(private http: HttpClient) { }




  getDepartmentsData(): Observable<any> {
    //debugger    
    return this.http.post(this.apiUrl+'/department/GetAllDepartment',"{  \"pageNumber\": 1,  \"pageSize\": 100,  \"planId\": 1}");
  }

  insertDepartmentDetails(settings: RegNewdepartment) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ '/department/savedepartment', settings, { headers })

      
  }
  updateDepartmentDetails(settings: RegNewdepartment) {    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ '/department/updatedepartment', settings, { headers })       
  }
  GetDepartmentById(departmentId: number)  {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.apiUrl+'/department/'+ departmentId);    
  }

}
