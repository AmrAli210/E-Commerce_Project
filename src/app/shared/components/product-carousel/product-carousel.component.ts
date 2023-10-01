import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../interfaces/product.model';

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

  constructor() {}

  ngOnInit() {
  }


}
