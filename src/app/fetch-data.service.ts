import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private url: String = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.url+'products/categories');
  }

  getProductsCategorie(categoria:String){
    return this.http.get(this.url+'products/category/'+categoria);
  }

  getProduct(id:number){
    return this.http.get(this.url+'products/'+id);
  }
}
