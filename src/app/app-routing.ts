import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import { ProductInfoComponent } from './modules/products/components/product-info/product-info.component';


export const routes: Routes = [
  {path: '', title: 'Home', pathMatch: 'full', component: HomeComponent},
  {path:'login',loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'product-info', component: ProductInfoComponent},

];


