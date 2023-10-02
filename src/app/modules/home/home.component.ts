import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { User } from 'src/app/shared/interfaces/user.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { faTruck,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  productService = inject(ProductService);

  categories: string[] = ['bestSeller', 'bestieDeals', 'newBeauty', 'mustHave'];
  changecategories: string[] = ['bestieDeals', 'newBeauty', 'mustHave'];

  bestSeller: Product[] = [];
  bestieDeals: Product[] = [];
  newBeauty: Product[] = [];
  mustHave: Product[] = [];
  customersComments:User[]=[];

  faTruck=faTruck;
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  

  // constructor() {}

  ngOnInit() {
    this.populateProducts();
    this.populateComments();
   
  }

  populateProducts() {
    for (let category of this.categories) {
      this.productService.getProductsItems(category).subscribe((productResponse: Product[]) => {
         this[category] = productResponse;     
      });
    }
  }

  populateComments()
  {
    this.productService.getProductComments().subscribe((commentResponse:User[])=>
    {
      this.customersComments=commentResponse;      
    })
  }

  getBestie()
  {
    for (let changecategory of this.changecategories) {
        this.productService.getProductsItems("bestieDeals").subscribe((productResponse: Product[]) => {
        this[changecategory] = productResponse;
        console.log(productResponse);
        
      })}      
  }

  getNewBeauty()
  {
    for (let changecategory of this.changecategories) {
      this.productService.getProductsItems("newBeauty").subscribe((productResponse: Product[]) => {
        this[changecategory] = productResponse;
        console.log(productResponse);
      })}
  }

  getMustHave()
  {
    for (let changecategory of this.changecategories) {
      this.productService.getProductsItems("mustHave").subscribe((productResponse: Product[]) => {
        this[changecategory] = productResponse;
        console.log(productResponse);
      })}
  }

}
