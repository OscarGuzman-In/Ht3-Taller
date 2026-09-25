import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtotalPipe } from '../../pipes/subtotal.pipe';
import { CartTotalPipe } from '../../pipes/cart-total.pipe';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
  CommonModule,
  SubtotalPipe,
  CartTotalPipe
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent implements OnDestroy {

  cartItems: CartItem[] = [];

  panelOpen = true;
  showCancelConfirm = false;
  showOrderCompleted = false;
  completedItems: CartItem[] = [];
  notice = '';

  private noticeTimer: ReturnType<typeof setTimeout> | undefined;

constructor(
  private readonly cartService: CartService,
  private readonly cdr: ChangeDetectorRef
) {
  this.cartService.cart$.subscribe(items => {
    this.cartItems = items;
    this.cdr.markForCheck();
  });
}

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeProduct(productId: number): void {
    this.cartService.removeProduct(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  togglePanel(): void {
    this.panelOpen = !this.panelOpen;
  }

  requestCancelOrder(): void {
    this.showCancelConfirm = true;
  }

  dismissCancelOrder(): void {
    this.showCancelConfirm = false;
  }

  confirmCancelOrder(): void {
    this.clearCart();
    this.showCancelConfirm = false;
    this.showNotice('Compra cancelada. Se restauró el stock utilizado.');
  }

  finishOrder(): void {
    this.completedItems = [...this.cartItems];
    this.showOrderCompleted = true;
    this.clearCart();
  }

  closeOrderCompleted(): void {
    this.showOrderCompleted = false;
    this.completedItems = [];
  }

  ngOnDestroy(): void {
    clearTimeout(this.noticeTimer);
  }

  private showNotice(message: string): void {
    this.notice = message;
    this.cdr.markForCheck();

    clearTimeout(this.noticeTimer);
    this.noticeTimer = setTimeout(() => {
      this.notice = '';
      this.cdr.markForCheck();
    }, 2500);
  }
}
