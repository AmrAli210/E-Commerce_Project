import {Component, OnInit, inject} from '@angular/core';
import { ProductService } from './shared/services/product.service';
import { AuthenticationService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myBag=inject(ProductService)
  auth=inject(AuthenticationService)
  constructor() {
  }
  ngOnInit(): void {
   this.myBag.getMyBagProducts().subscribe((response)=>{
      this.myBag.bagCount.next(response.length)
      this.myBag.bagCountNumber=response.length
    })    

  }

}
