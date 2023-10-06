import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  quantity: number = 1;

  // constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}

  // addItem() {
  //   if (this.data.quantity > this.quantity) {
  //     this.quantity += 1;
  //   }
    
  // }

  // removeItem() {
  //   if (this.quantity > 1) {
  //     this.quantity -= 1;
  //   }
  // }
}
