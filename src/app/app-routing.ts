import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";


export const routes: Routes = [
  {path: '', title: 'Home', pathMatch: 'full', component: HomeComponent},
  {path:'login',loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule)}
];


