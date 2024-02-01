import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingModule } from 'angular-star-rating';
import { ToastModule } from 'primeng/toast';







@NgModule({
  declarations: [
    ProductsComponent,
    ProductInfoComponent,
  ],
  imports: [
    SharedModule,
    FontAwesomeModule,
    ToastModule,
    StarRatingModule.forRoot(),
  ],
 
})
export class ProductsModule { }
