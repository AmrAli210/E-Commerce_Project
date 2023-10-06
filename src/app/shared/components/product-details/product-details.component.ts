import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { User } from '../../interfaces/user.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productDetails?: Product;
  @Input() commentDetails?: User;
  @Output() currentProduct: EventEmitter<Product> = new EventEmitter<Product>();
  testing :EventEmitter<Product>=new EventEmitter<Product>()

  faStar = faStar;

  constructor( public router: Router , private service:ProductService) {}

  ngOnInit(): void {}


  getSelectedProduct(){
    this.currentProduct.emit(this.productDetails);
  }
  goToSelectedProduct()
  {
    this.router.navigate(['/product-info'],{queryParams: { id: this.productDetails?.id , category: this.productDetails?.category}});    
    
  }
}
