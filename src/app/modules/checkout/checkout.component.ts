import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import {
  faCcPaypal,
  faCcVisa,
  faCcAmazonPay,
} from '@fortawesome/free-brands-svg-icons';
import { MyBag } from 'src/app/shared/interfaces/mybag.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  mybag = inject(ProductService);
  myBagProducts: MyBag[] = [];
  totalPrice: number = 0;
  month: string[] = Array.from({ length: 12 }, (item, i) => {return new Date(0, i).toLocaleString('en-US', { month: 'long' });});
  years: number[] = [];
  PaypalCard = faCcPaypal;
  VisaCard = faCcVisa;
  AmazonPayCard = faCcAmazonPay;

  ngOnInit(): void {
    this.getMyBagProducts()
    let max = new Date().getFullYear();
    let min = max - 14;
    for (var i = max; i >= min; i--) {
      this.years.push(i);
    }
  }

  constructor() {}

  getMyBagProducts() {
    this.mybag.getMyBagProducts().subscribe((myBagResponse: MyBag[]) => {
      this.myBagProducts = myBagResponse;
      for (let myBagProduct of this.myBagProducts) {
        this.totalPrice += myBagProduct.purchasePrice!;
      }
    });
  }

  cardsInfo: FormGroup = this.formBuilder.group({
    cardNumber: ['', Validators.required],
    nameOnCArd: ['', Validators.required],
    month: [``, Validators.required],
    year: [``, Validators.required],
    ccv: [``, Validators.required],
  });

  submit() {
    // console.log(this.cardsInfo.value);
  }
}
