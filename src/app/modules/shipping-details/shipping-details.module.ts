import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingDetailsComponent } from './shipping-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShippingDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ShippingDetailsModule { }
