import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { UserComment } from 'src/app/shared/interfaces/user-comment.model';
import { ProductService } from 'src/app/shared/services/product.service';
import {faTruck,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productService = inject(ProductService);

  categories: string[] = ['bestSeller', 'bestieDeals', 'newBeauty', 'mustHave'];
  categoryNames:string[]=['Bestie deals for you','New beauty bestie','Must-have beauties'];
  selectedCategory:string='Bestie deals for you';
  loading?: boolean;

  bestSeller: Product[] = [];
  bestieDeals: Product[] = [];
  newBeauty: Product[] = [];
  mustHave: Product[] = [];
  customersComments: UserComment[] = [];
  faTruck = faTruck;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  // constructor() {}

  ngOnInit() {

    this.populateProducts();
    this.populateComments();
    this.loading = !this.loading   
  }

  populateProducts() {
    this.loading = true;
    for (let category of this.categories) {
      this.productService.getProductsItems(category).subscribe((productResponse: Product[]) => {
          this[category] = productResponse;
         this.loading = false;

        });
    }
  }

  populateComments() {
    this.loading = true;
    this.productService.getProductComments().subscribe((commentResponse: UserComment[]) => {
        this.customersComments = commentResponse;
        this.loading = false;
      });
  }

  getCategoryName(name:string)
  {
   return this.selectedCategory=name

  }
  
}
