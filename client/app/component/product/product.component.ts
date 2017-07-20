import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from "../../core/services/products/product.service";
import { Product } from '../../core/models/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor(private productService: ProductService, private router: Router) {
  }

  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product) {
    this.productService.addToCart(product)
  }

  getProducts() {
    this.productService.getProducts().then(products => this.products = products)
  }

  ngOnInit() {
    // Get initial data from productService to display on the page
    this.getProducts()
  }
}
