import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
host=environment.host;
  constructor(private _http:HttpClient) { }

  //get all products service
  getAllProducts():Observable<Product[]>{
    return this._http.get<Product[]>(`${this.host}/products`)

  }
  //get all products selected service
  getSelectedProducts():Observable<Product[]>{
    return this._http.get<Product[]>(`${this.host}/products?selected=true`)

  }
  //get all products available service
  getAvailableProducts():Observable<Product[]>{
    return this._http.get<Product[]>(`${this.host}/products?available=true`)

  }
  onSearch(keyword:string):Observable<Product[]>{
    return this._http.get<Product[]>(`${this.host}/products?name_like=${keyword}`)

  }
}
