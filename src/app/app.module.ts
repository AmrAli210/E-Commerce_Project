import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeModule} from "./modules/home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { SignUpModule } from './modules/sign-up/sign-up.module';
import { LoginModule } from './modules/login/login.module';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation:"enabledBlocking"}),
    HomeModule,
    SignUpModule,
    LoginModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
