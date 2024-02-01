import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import {
  faThumbsUp,
  faBagShopping,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';

import { HttpClient } from '@angular/common/http';
import { MyBag } from 'src/app/shared/interfaces/mybag.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  providers: [MessageService]
})
export class ProductInfoComponent implements OnInit {
    
  myBagQuantity = inject(ProductService);
  messageService = inject(MessageService);
  productInfo?: Product;
  quantity: number = 1;
  id: string = '';
  myBagProduct?: MyBag;

  like = faThumbsUp;
  shopping = faBagShopping;
  verified = faCircleCheck;

  constructor(
    private route: ActivatedRoute,
    private selectedProduct: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id')!;
    });
    this.selectedProduct.getProduct(this.id).subscribe((res) => {
      this.productInfo = res;

      this.myBagProduct = {
        title: this.productInfo?.title,
        id: this.productInfo?.id,
        quantity: this.productInfo?.quantity,
        valueOfQuantity: this.quantity,
        thumbnail: this.productInfo?.thumbnail,
        originalPrice: this.productInfo?.price,
        purchasePrice: Number(this.productInfo?.price),
      };
    });
  }

  addItem() {
    if (this.productInfo!.quantity > this.quantity) {
      this.quantity += 1;
      this.myBagProduct!.valueOfQuantity = this.quantity;
      this.myBagProduct!.purchasePrice =
        this.quantity * this.productInfo!.price;
    }
  }

  removeItem() {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.myBagProduct!.valueOfQuantity = this.quantity;
      this.myBagProduct!.purchasePrice =
        this.quantity * this.productInfo!.price;
    }
  }

  addProduct() {
    this.http
      .post<MyBag>(`https://e-commerce-apis-k53h.onrender.com/mybag`, this.myBagProduct)
      .subscribe({
        next: (success) => {
          this.myBagQuantity.bagCount.next(this.myBagQuantity.bagCountNumber + 1);
          this.myBagQuantity.bagCountNumber += 1;
          this.checkSuccess()
        },
        error: (error) =>  this.checkError()
      });
  }

  checkSuccess() {
    this.messageService.add({
      key: 'tc',
      severity: 'success',
      summary: 'success',
      detail: 'Product Is In Your Cart',
    });
  }
  checkError() {
    this.messageService.add({
      key: 'tc',
      severity: 'error',
      summary: 'error',
      detail: 'Product Is Already In Your Cart ',
    });
  }
}
