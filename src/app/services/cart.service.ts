import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly cartSubject = new BehaviorSubject<CartItem[]>([]);

  readonly cart$ = this.cartSubject.asObservable();

  readonly reserved$ = this.cart$.pipe(
    map(items => {
      const reserved = new Map<number, number>();

      for (const item of items) {
        reserved.set(item.product.id, item.quantity);
      }

      return reserved;
    })
  );

  addProduct(product: Product): void {
    if (!product || product.id <= 0 || product.stock <= 0) {
      return;
    }

    const currentCart = this.cartSubject.value;

    const existingItem = currentCart.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        return;
      }

      const updatedCart = currentCart.map(item =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      this.cartSubject.next(updatedCart);
      return;
    }

    const updatedCart: CartItem[] = [
      ...currentCart,
      {
        product,
        quantity: 1
      }
    ];

    this.cartSubject.next(updatedCart);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (productId <= 0) {
      return;
    }

    if (quantity <= 0) {
      this.removeProduct(productId);
      return;
    }

    const currentCart = this.cartSubject.value;

    const item = currentCart.find(
      item => item.product.id === productId
    );

    if (!item) {
      return;
    }

    if (quantity > item.product.stock) {
      return;
    }

    const updatedCart = currentCart.map(item =>
      item.product.id === productId
        ? {
            ...item,
            quantity
          }
        : item
    );

    this.cartSubject.next(updatedCart);
  }

  removeProduct(productId: number): void {
    if (productId <= 0) {
      return;
    }

    const currentCart = this.cartSubject.value;

    const updatedCart = currentCart.filter(
      item => item.product.id !== productId
    );

    this.cartSubject.next(updatedCart);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }
}
