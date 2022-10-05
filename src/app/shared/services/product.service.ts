import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproducts():Observable<any>{
    return this.http.get(environment.getproduct);
  }
  checkout(qty: any) {
    return this.http.post(
      environment.payment,
      {
        
          quantity:qty,
          product_details:{
          product_name:"Apple airpods",
          images:["https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"],
          price:299
      }}
      
        
      ,
      { responseType: 'text' }
    );
  }
 
}
