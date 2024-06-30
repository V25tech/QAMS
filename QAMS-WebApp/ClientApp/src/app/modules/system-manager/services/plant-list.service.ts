import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantList, RegPlant } from 'src/app/models/plantList.model';

@Injectable({
  providedIn: 'root'
})
export class PlantListService {

  private apiUrl = 'ADMIN_API';

  constructor(private http: HttpClient) { }
   
  getplantData(): Observable<any> {    
    return this.http.post(this.apiUrl+'/plant/GetAllPlant',"{\"pageNumber\":1,\"pageSize\":100}");
  }
  insertPlantDetails(settings: RegPlant) {    
    return this.http.post(this.apiUrl+ '/plant/saveplant', settings)      
  }
  UpdatePlantDetails(settings: RegPlant) {  
    return this.http.post(this.apiUrl+ '/plant/updateplant', settings)       
  }
  GetPlantById(plantId: number)  {    
    return this.http.get(this.apiUrl+'/plant/'+ plantId);    
  }
}
