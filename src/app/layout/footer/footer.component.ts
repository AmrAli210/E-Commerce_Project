import { Component } from '@angular/core';
import { faCcPaypal,faCcVisa,faCcAmazonPay,faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faCcPaypal=faCcPaypal
  faCreditCard=faCreditCard
  faCcVisa=faCcVisa
  faCcAmazonPay=faCcAmazonPay
  faCcStripe=faCcStripe

}
