import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/interfaces/product.model';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent {

  quantity: number = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}

  addItem() {
    if (this.data.quantity > this.quantity) {
      this.quantity += 1;
    }
    
  }

  removeItem() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
