import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../interfaces/product.model';
import { UserComment } from '../../interfaces/user-comment.model';
import { PopupDialogComponent } from 'src/app/modules/home/components/popup-dialog/popup-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit {
  @Input() products:Product[]=[];
  @Input() customersComments:UserComment[]=[];
  @Input() productImgs?:string[]=[];

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
        items: 2,
        nav: true,
      },
      600: {
        items: 3,
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
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    nav:true,
    navText: [
          '<i class= "pi pi-chevron-left"></i>',
          '<i class= "pi pi-chevron-right"></i>',
        ],
    responsive: {
      0: {
        items: 1,
        nav: true,
        center: true,
      },
      500: {
        items: 1  ,
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
    this.openPopup(selectedItem)
  }

}
