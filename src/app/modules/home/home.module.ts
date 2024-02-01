import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { NavModule, TabsModule } from '@coreui/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule,
    FontAwesomeModule,
    MatTabsModule,
    NavModule,
    TabsModule,
  ],
})
export class HomeModule {}
