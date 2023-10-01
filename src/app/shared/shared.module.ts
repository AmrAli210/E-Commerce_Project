import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    ProductCarouselComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports:[ProductCarouselComponent]
})
export class SharedModule { }
