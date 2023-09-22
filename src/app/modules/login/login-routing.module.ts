import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';

 export const loginRoutes: Routes = [
	{
	  path: '',
          component:LoginComponent ,

	}
];

// @NgModule({
//   imports: [ RouterModule.forChild(loginRoutes) ],
//   exports: [ RouterModule ]
// })
// export class loginRoutingModule { }
