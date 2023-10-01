import { Component,Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  @Input() productDetails?:Product;

  constructor(){}

  ngOnInit(): void {    
  }

}
