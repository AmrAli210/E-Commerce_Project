import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import { ProductInfoComponent } from './modules/products/components/product-info/product-info.component';
import { ProductCategoriesComponent } from './modules/product-categories/product-categories.component';
import { MyBagComponent } from './modules/my-bag/my-bag.component';
import { ShippingDetailsComponent } from './modules/shipping-details/shipping-details.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { OrderDoneComponent } from './modules/order-done/order-done.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { AlreadyLoggedGuard } from './shared/auth/auth.guard';
import { CheckedLoggedInGuard } from './shared/auth/auth-loggedin.guard';


export const routes: Routes = [
  {path: '', redirectTo:'/home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'product-info', component: ProductInfoComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'product-categories', component: ProductCategoriesComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'my-bag', component: MyBagComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'shipping-details', component: ShippingDetailsComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'checkout', component: CheckoutComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'order-done', component: OrderDoneComponent,canActivate:[AlreadyLoggedGuard]},
  {path: 'sign-up-page', component: SignUpComponent,canActivate:[CheckedLoggedInGuard]},
  {path: 'sign-in-page', component: SignInComponent,canActivate:[CheckedLoggedInGuard]},
];


