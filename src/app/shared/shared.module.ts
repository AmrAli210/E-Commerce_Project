import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupDialogComponent } from '../modules/home/components/popup-dialog/popup-dialog.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    ProductCarouselComponent,
    ProductDetailsComponent,
    PopupDialogComponent,
    LoadingSpinnerComponent,
    
  ],
  imports: [CommonModule, FontAwesomeModule, MatDialogModule,
    CarouselModule,

  ],
  exports: [
    ProductCarouselComponent,
    ProductDetailsComponent,
    PopupDialogComponent,
    CommonModule,
    CarouselModule,
    LoadingSpinnerComponent,

  ],
})
export class SharedModule {}
