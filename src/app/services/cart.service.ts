import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  title: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  get items(): CartItem[] {
    return this.cartItems.value;
  }

  addToCart(phone: { title: string; price: number; image: string }) {
    const items = [...this.cartItems.value];

    const existing = items.find(item => item.title === phone.title);

    if (existing) {
      existing.quantity++;
    } else {
      items.push({
        ...phone,
        quantity: 1
      });
    }

    this.cartItems.next(items);
  }

  get totalItems(): number {
    return this.cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
  }
}