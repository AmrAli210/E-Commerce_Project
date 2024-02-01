import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { MyBag } from 'src/app/shared/interfaces/mybag.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-my-bag',
  templateUrl: './my-bag.component.html',
  styleUrls: ['./my-bag.component.scss'],
})
export class MyBagComponent implements OnInit {
  myBag = inject(ProductService);
  http = inject(HttpClient);
  router = inject(Router);
  myBagProducts: MyBag[] = [];
  totalPrice: number = 0;
  disabledDeleting: boolean = false;
  loading?: boolean;

  addDebouncer = new Subject<number>();
  removeDebouncer = new Subject<number>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.getMyBag();
    this.addDebouncer
      .pipe(debounceTime(2000))
      .subscribe((index) => this.handleAddItem(index));
    this.removeDebouncer
      .pipe(debounceTime(2000))
      .subscribe((index) => this.handleRemoveItem(index));
  }

  getMyBag() {
    this.loading = true;
    this.myBagProducts = [];
    this.totalPrice = 0;
    this.myBag.getMyBagProducts().subscribe((myBagResponse: MyBag[]) => {
      this.myBagProducts = myBagResponse;
      this.loading = false;
      
      for (let myBagProduct of this.myBagProducts) {
        this.totalPrice += myBagProduct.purchasePrice!;
      }
    });
  }

  addItem(index: number) {
    this.disabledDeleting = true;
    if (
      this.myBagProducts[index].valueOfQuantity <
      this.myBagProducts[index].quantity
    ) {
      this.myBagProducts[index].valueOfQuantity += 1;
      this.myBagProducts[index].purchasePrice =
        this.myBagProducts[index].originalPrice *
        this.myBagProducts[index].valueOfQuantity;
      this.totalPrice += Number(this.myBagProducts[index].originalPrice);
    }
    this.addDebouncer.next(index);
  }

  handleAddItem(index: number) {
    this.http
      .put(
        `https://e-commerce-apis-k53h.onrender.com/mybag/${this.myBagProducts[index].id}`,
        this.myBagProducts[index]
      )
      .subscribe(() => (this.disabledDeleting = false));
  }

  handleRemoveItem(index: number) {
    this.http
      .put(
        `https://e-commerce-apis-k53h.onrender.com/mybag/${this.myBagProducts[index].id}`,
        this.myBagProducts[index]
      )
      .subscribe(() => (this.disabledDeleting = false));
  }
  removeItem(index: number) {
    this.disabledDeleting = true;
    if (this.myBagProducts[index].valueOfQuantity > 1) {
      this.myBagProducts[index].valueOfQuantity -= 1;
      this.myBagProducts[index].purchasePrice =
        this.myBagProducts[index].originalPrice *
        this.myBagProducts[index].valueOfQuantity;
      this.totalPrice -= Number(this.myBagProducts[index].originalPrice);
    }
    this.removeDebouncer.next(index);
  }

  deleteProduct(selectedProduct: MyBag) {
    this.http
      .delete(
        `https://e-commerce-apis-k53h.onrender.com/mybag/${selectedProduct.id}`
      )
      .subscribe(() => {
        this.getMyBag();
        this.myBag.bagCount.next(this.myBag.bagCountNumber - 1);
        this.myBag.bagCountNumber -= 1;
      });
  }

  openDialog(selectedProduct: MyBag): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef
      .afterClosed()
      .subscribe((result) =>
        result == 'true' ? this.deleteProduct(selectedProduct) : ''
      );
  }
  completeCheckout() {
    this.myBagProducts.length !== 0
      ? this.router.navigate(['/shipping-details'])
      : '';
  }
}
