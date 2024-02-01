import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { UserComment } from '../../interfaces/user-comment.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productDetails?: Product;
  @Input() commentDetails?: UserComment;
  @Output() currentProduct: EventEmitter<Product> = new EventEmitter<Product>();


  faStar = faStar;

  constructor( public router: Router ) {}

  ngOnInit(): void {
  }


  getSelectedProduct(){
    this.currentProduct.emit(this.productDetails);
  }
  goToSelectedProduct()
  {
   
    this.router.navigate(['/product-info'],{queryParams: { id: this.productDetails?.id }});  
  
  }
}
