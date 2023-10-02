import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsItems(category:string) : Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/posts?category=${category}`);
  }

  getProductComments(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/comments')
  }


}
