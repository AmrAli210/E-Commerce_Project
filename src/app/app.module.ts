import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeModule} from "./modules/home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { routes } from './app-routing';
import { LayoutModule } from './layout/layout.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductCategoriesModule } from './modules/product-categories/product-categories.module';
import { MyBagModule } from './modules/my-bag/my-bag.module';
import { ShippingDetailsModule } from './modules/shipping-details/shipping-details.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { SignInModule } from './modules/sign-in/sign-in.module';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation:"enabledBlocking" , scrollPositionRestoration:'enabled'}),
    HomeModule,
    ProductsModule,
    LayoutModule,
    ProductCategoriesModule,
    MyBagModule,
    ShippingDetailsModule,
    CheckoutModule,
    SignUpModule,
    SignInModule,
      ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
