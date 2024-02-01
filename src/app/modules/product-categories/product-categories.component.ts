import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { PopupDialogComponent } from '../home/components/popup-dialog/popup-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
})
export class ProductCategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  productService = inject(ProductService);
  dialog = inject(MatDialog);
  products: Product[] = [];
  filterdProducts: Product[] = [];
  filters: string[] = [];
  pageItems: Product[] = [];
  loading?: boolean;

  ngOnInit(): void {
    this.getProducts();
  }

  constructor() {}

  getProducts() {
    this.loading = true;
    this.productService
      .getAllProductsCategories()
      .subscribe((productResponse: Product[]) => {
        this.products = productResponse;
        this.filterdProducts = this.products;
        this.slicePageItems();
        this.loading = false;
      });
  }

  openPopup(selectedProduct: Product) {
    this.dialog.open(PopupDialogComponent, {
      width: '60%',
      height: '450px',
      data: {
        title: selectedProduct.title,
        imgs: selectedProduct.imgs,
        quantity: selectedProduct.quantity,
        details: selectedProduct.details,
        price: selectedProduct.price,
      },
    });
  }

  getSelectedProduct(selectedItem: Product) {
    this.openPopup(selectedItem);
  }

  getValue(value: string) {
    this.filters.includes(value)
      ? (this.filters = this.filters.filter((filterStr) => filterStr != value)) //return the filter that doesn't equal the value
      : this.filters.push(value);

    this.filterdProducts = [];

    for (const product of this.products) {
      for (const filter of this.filters) {
        if (product.tags.includes(filter)) {
          if (this.filterdProducts.indexOf(product) === -1) {
            this.filterdProducts.push(product);
          }
          this.slicePageItems();
        }
      }
    }

    if (this.filters.length > 6) {
      this.pageItems = this.filterdProducts = [];
    }

    if (this.filters.length == 0) {
      this.filterdProducts = this.products;
      this.slicePageItems();
    }
    this.paginator.pageIndex = 0;
  }

  slicePageItems() {
    return (this.pageItems = this.filterdProducts.slice(0, 6));
  }

  changePage(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.filterdProducts.length) {
      endIndex = this.filterdProducts.length;
    }
    this.pageItems = this.filterdProducts.slice(startIndex, endIndex);
  }
}
