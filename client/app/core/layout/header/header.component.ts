import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/products/product.service";

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  public cart = [];
  
  public totalPrice;
  public totalItems;

  constructor(
    private userService: UserService,
    public auth: AuthService,
    private productService: ProductService
  ) {}

  getPrice_Total() {
      let total = this.cart.reduce( (total, item) => {
        total += item.price;
        // slice excess decimal places and return the result
        let str = total.toString()
        let result = str.slice(0, str.indexOf('.') + 3)
        result = parseFloat(result)
        return result;
      }, 0)

      this.totalPrice = total;
      this.totalItems = this.cart.length; 

  }
  ngOnInit() {
    // Subscribe to the observable to receive updates on the new products added to the cart 
    this.productService.subcribeCart()
      .then(obs => obs.subscribe(data => {
        console.log(data)
        this.cart = [...this.cart, data]
        this.getPrice_Total()
      }))
  }
}
