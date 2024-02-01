import { Component,HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { AuthenticationService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  quantity: number = 0;
  myBagQuantity = inject(ProductService);
  auth = inject(AuthenticationService);
  router = inject(Router);
  isAuthenticated: boolean = false;
  scrolling:boolean=false

  @HostListener("document:scroll") 
  onWindowScroll() {
   if(document.body.scrollTop>=50 || document.documentElement.scrollTop>=50)
   {
    this.scrolling=true
   }
   else {
    this.scrolling=false

   }
  }

  ngOnInit() {
    this.myBagQuantity.bagCount.subscribe(
      (bagCount) => (this.quantity = bagCount)
    );
    this.auth.isAuthenticated.subscribe(
      (authResponse) => (this.isAuthenticated = !!authResponse)
    );
  }

  constructor() {}

  logout() {
    this.auth.logout();
    this.auth.token.next({});
  }
}
