import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantAssignmentUsersService 


{
  getProductsData() {
    return [
        {
           
            name: 'Plant-01',
            
        },
        {
           
            name: 'Plant-02',
           
        },
        {
           
            name: 'Plant-03',
           
        },
        {
         
            name: 'Plant-04',
           
        }
       
    ];
  }

  constructor(private http: HttpClient) { }
  getPlantAssignmentUserData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/planAssignmentUsers.json');
  }
  insertPlantAssignmentData(settings: PlantAssignmentUsersService) {
    
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   // return this.http.post(this.apiUrl+ '/market/savemarket', settings, { headers });      
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
}
