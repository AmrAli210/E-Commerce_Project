import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product.model';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent implements OnInit {
  router=inject(Router)
  totalPrice: number = 0;
  quantity: number = 1;

  ngOnInit(): void {
    this.totalPrice+=Number(this.data.price)
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}

  addItem() {
    if (this.data.quantity > this.quantity) {
      this.quantity += 1;
      this.totalPrice+=Number(this.data.price)
     
    }
    
  }

  removeItem() {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.totalPrice-=Number(this.data.price)
  
    }
  }
}
