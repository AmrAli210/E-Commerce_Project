import { MyBag } from './../interfaces/mybag.model';
import {  Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserComment } from '../interfaces/user-comment.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  bagCount = new BehaviorSubject<number>(0)
  bagCountNumber:number=0

  constructor(private http: HttpClient) {}

  getProductsItems(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://e-commerce-apis-k53h.onrender.com/products?category=${category}`);
  }
  
  getAllProductsCategories(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://e-commerce-apis-k53h.onrender.com/products`);
  }

  getProductComments(): Observable<UserComment[]> {
    return this.http.get<UserComment[]>('https://e-commerce-apis-k53h.onrender.com/comments');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`https://e-commerce-apis-k53h.onrender.com/products?id=${id}`);
  }

  getMyBagProducts():Observable<MyBag[]>{
    return this.http.get<MyBag[]>(`https://e-commerce-apis-k53h.onrender.com/mybag`)
  }

}
