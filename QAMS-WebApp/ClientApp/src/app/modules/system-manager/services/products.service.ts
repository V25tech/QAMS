import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Products, RegProduct } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'ADMIN_API';
  constructor(private http: HttpClient) { }
  getProductsData(): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/product/GetAllProduct',"{\"pageNumber\":1,\"pageSize\":100}", { headers });
  }

  insertProducttDetails(settings: RegProduct) {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ '/product/saveproduct', settings, { headers });
      
  }
}
