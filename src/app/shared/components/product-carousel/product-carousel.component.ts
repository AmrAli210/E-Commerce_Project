import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../interfaces/product.model';
import { User } from '../../interfaces/user.model';
import { PopupDialogComponent } from 'src/app/modules/home/components/popup-dialog/popup-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit {
  @Input() bestSellers: Product[] = [];
  @Input() bestieDeals: Product[] = [];
  @Input() newBeauty: Product[] = [];
  @Input() mustHave: Product[] = [];
  @Input() customersComments:User[]=[];
  @Input() productImgs?:string[];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: [
      '<i class= "pi pi-chevron-left"></i>',
      '<i class= "pi pi-chevron-right"></i>',
    ],
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        center: true,
      },
      500: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
      },
    },
  };
  
  customerOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: [
      '<i class= "pi pi-chevron-left"></i>',
      '<i class= "pi pi-chevron-right"></i>',
    ],
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        center: true,
      },
      500: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  };

  productOptions: OwlOptions = {
    dots: true,
    navSpeed: 600,
    nav:false,
    responsive: {
      0: {
        items: 1,
       
        center: true,
      },
      500: {
        items: 1,
        
      },
      600: {
        items: 2,
        
      },
      1000: {
        items: 3,
        
      },
    },
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  openPopup(selectedProduct:Product) {
    this.dialog.open(PopupDialogComponent, {
      width: '60%',
      height: '450px',
      data: { 
        title: selectedProduct.title,
        imgs:selectedProduct.imgs,
        quantity:selectedProduct.quantity,
        details:selectedProduct.details,
        price:selectedProduct.price
      }});
  }

  getSelectedProduct(selectedItem: Product)
  {
    // console.log(selectedItem);
    this.openPopup(selectedItem)
    
  }

}
