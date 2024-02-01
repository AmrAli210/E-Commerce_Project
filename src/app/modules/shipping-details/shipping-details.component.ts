import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyBag } from 'src/app/shared/interfaces/mybag.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss'],
})
export class ShippingDetailsComponent implements OnInit {
  mybag = inject(ProductService);
  formBuilder=inject(FormBuilder);
  router = inject(Router);
  totalPrice:number=0
  myBagProducts:MyBag[]=[];

  shippingDetials: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    phone: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getMyBagProducts() 
  }

  constructor() {}

  getMyBagProducts() {
    this.mybag.getMyBagProducts().subscribe((myBagResponse: MyBag[]) => {
      this.myBagProducts=myBagResponse
      for(let myBagProduct of this.myBagProducts)
      {
        this.totalPrice+=myBagProduct.purchasePrice!      
      }
    });
  }

  submit()
  {
    // console.log(this.totalPrice);    
  }

  resetForm()
  {
    this.shippingDetials.reset()
  }
}
