import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchedItems(category:string) : Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/posts?category=${category}`);
  }


}
