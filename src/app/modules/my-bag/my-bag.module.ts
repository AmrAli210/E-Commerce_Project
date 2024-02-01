import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBagComponent } from './my-bag.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MyBagComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SharedModule,
  ],
  exports:[ConfirmationDialogComponent]
})
export class MyBagModule { }
