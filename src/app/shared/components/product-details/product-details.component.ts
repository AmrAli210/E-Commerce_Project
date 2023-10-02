import { Component,Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { User } from '../../interfaces/user.model';
import { faStar} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  @Input() productDetails?:Product;
  @Input() commentDetails?:User;
  faStar=faStar
  constructor(){}

  ngOnInit(): void {    
  }

}
