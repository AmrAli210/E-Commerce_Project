import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductCarouselComponent } from 'src/app/shared/components/product-carousel/product-carousel.component';



@NgModule({
  declarations: [
    ProductsComponent,
    // ProductCarouselComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductsModule { }
