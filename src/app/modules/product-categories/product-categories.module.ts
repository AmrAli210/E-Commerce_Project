import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesComponent } from './product-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator';





@NgModule({
  declarations: [
    ProductCategoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
  ]
})
export class ProductCategoriesModule { }
