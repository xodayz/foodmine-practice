import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart) =>{
      this.cart = cart;
    })
  }

  removeFromCart(cartitem: CartItem){
    this.cartService.removeFromCart(cartitem.food.id);
  }

  changeQuantityFromCart(cartItem: CartItem, quantityString: string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

}
