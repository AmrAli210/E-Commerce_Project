import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NavModule, TabsModule } from '@coreui/angular';

@NgModule({
  declarations: [HomeComponent, PopupDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule,
    MatTabsModule,
    NavModule,
    TabsModule,
  ],
  exports: [PopupDialogComponent],
})
export class HomeModule {}
