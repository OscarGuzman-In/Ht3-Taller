import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnDestroy {

  readonly products: Product[] = PRODUCTS;
  readonly reserved$: Observable<Map<number, number>>;

  feedback = '';

  private feedbackTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private readonly cartService: CartService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.reserved$ = cartService.reserved$;
  }

  availableStock(product: Product, reserved: Map<number, number>): number {
    return product.stock - (reserved.get(product.id) ?? 0);
  }

  quantityInCart(productId: number, reserved: Map<number, number>): number {
    return reserved.get(productId) ?? 0;
  }

  addToCart(product: Product): void {
    this.cartService.addProduct(product);
    this.showFeedback(product);
  }

  ngOnDestroy(): void {
    clearTimeout(this.feedbackTimer);
  }

  private showFeedback(product: Product): void {
    this.feedback = `Producto agregado al carrito: ${product.name}`;
    this.cdr.markForCheck();

    clearTimeout(this.feedbackTimer);
    this.feedbackTimer = setTimeout(() => {
      this.feedback = '';
      this.cdr.markForCheck();
    }, 2000);
  }
}