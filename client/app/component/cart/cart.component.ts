import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../core/services/products/product.service";
import { CartStore } from '../../store/cart.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartSubscription: Subscription;

  public cart = [];
  public totalPrice;

  constructor(private productService: ProductService, private cartStore: CartStore) { }

  /*removeProduct(product) {
    this.cart.forEach((cartItem, i) => {
      if (cartItem.id === product.id) {
        this.cart.splice(i, 1)
      }
    })
  }*/
  removeProduct(index) {
    this.cartStore.removeFromCart(index)
  }

  checkout() {
    alert('Sorry! Checkout will be coming soon!')
  }

  getTotalPrice() {
    let total = this.cart.reduce((total, item) => {
      total += item.price;
      // slice excess decimal places and return the result
      let str = total.toString()
      let result = str.slice(0, str.indexOf('.') + 3)
      result = parseFloat(result)
      return result;
    }, 0)

    this.totalPrice = total;
  }

  ngOnInit() {
    // Get all the products added to the cart 
    /*this.productService.getCart()
      .then(products => {
        products.forEach(product => {
          this.cart.push(product)
        })
        this.getTotalPrice()
      })*/
      this.cartSubscription = this.cartStore.getState().subscribe(res => {
        this.cart = res.products;
        this.getTotalPrice();
      })
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

}
