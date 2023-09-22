import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

const signUpRoutes: Routes = [
	{
	  path: 'sign',
          component:SignUpComponent ,

	}
];

@NgModule({
  imports: [ RouterModule.forRoot(signUpRoutes) ],
  exports: [ RouterModule ]
})
export class SignUpRoutingModule { }
