import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

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

  // constructor() {}

  ngOnInit() {
    this.populateProducts();
  }


  populateProducts() {
    for (let category of this.categories) {
      this.productService.fetchedItems(category).subscribe((res: Product[]) => {
        this[category] = res;
      });
    }
  }

  getBestie()
  {
    for (let changecategory of this.changecategories) {
      this.productService.fetchedItems("bestieDeals").subscribe((res: Product[]) => {
        this[changecategory] = res;
      });
    }
  }

  getNewBeauty()
  {
    for (let changecategory of this.changecategories) {
      this.productService.fetchedItems("newBeauty").subscribe((res: Product[]) => {
        this[changecategory] = res;
      });
    }
  }

  getMustHave()
  {
    for (let changecategory of this.changecategories) {
      this.productService.fetchedItems("mustHave").subscribe((res: Product[]) => {
        this[changecategory] = res;
      });
    }
  }
}
