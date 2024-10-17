import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

  constructor() { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string):void{
    this.cart.items = this.cart.items.filter(items => items.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = cartItem.quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJSON = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJSON);
    this.cartSubject.next(this.cart); 
  }

  private getFromLocalStorage(): Cart {
    if (typeof localStorage !== 'undefined') {
      const cartJson = localStorage.getItem('cart');
      return cartJson ? JSON.parse(cartJson) : new Cart();
    }
    return new Cart();
  }

  private saveToLocalStorage(cart: Cart): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
}
