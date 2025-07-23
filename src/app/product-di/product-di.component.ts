import { Component, OnInit } from '@angular/core';
import {CartService} from '../DI';
@Component({
  selector: 'app-product-di',
  templateUrl: './product-di.component.html',
  styleUrls: ['./product-di.component.css']
})
export class ProductDiComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.cartService.calculateTotal());
  }
}
